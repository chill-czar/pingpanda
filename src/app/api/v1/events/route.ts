import { FREE_QUOTA, PAID_QUOTA } from "@/config"
import { db } from "@/db"
import { DiscordClient } from "@/lib/discord-client"
import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator"
import { timeStamp } from "console"
import { color } from "framer-motion"
import { NextRequest, NextResponse } from "next/server"
import { useId } from "react"
import { z } from "zod"

const REQUEST_VALIDATOR = z
  .object({
    category: CATEGORY_NAME_VALIDATOR,
    Fields: z.record(z.string().or(z.number()).or(z.boolean())).optional(),
    description: z.string().optional(),
  })
  .strict()
export const POST = async (req: NextRequest) => {
  const authHeader = req.headers.get("Authorization")
  console.log("auth header:", authHeader)

  if (!authHeader) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
  if (!authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Invalid auth header format. Expected: 'Bearer [API_KEY]" },
      { status: 401 }
    )
  }
  const apiKey = authHeader.split(" ")[1]

  if (!apiKey || apiKey.trim() === "") {
    return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
  }

  const user = await db.user.findUnique({
    where: {
      apiKey,
    },
    include: { EventCategory: true },
  })

  if (!user) {
    return NextResponse.json({ message: "Invalid API key" }, { status: 401 })
  }

  if (!user.discordId) {
    return NextResponse.json(
      {
        message: "You need to connect your Discord account to use this feature",
      },
      { status: 403 }
    )
  }
  //   ACTUAL LOGIC

  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  const quota = await db.quota.findUnique({
    where: {
      userId: user.id,
      month: currentMonth,
      year: currentYear,
    },
  })

  const quotaLimit =
    user.plan === "FREE"
      ? FREE_QUOTA.maxEventsPerMonth
      : PAID_QUOTA.maxEventsPerMonth

  if (quota && quota.count >= quotaLimit) {
    return NextResponse.json(
      {
        message: `You have reached your monthly limit of ${quotaLimit} events. Please upgrade your plan to create more events.`,
      },
      { status: 429 }
    )
  }

  const discord = new DiscordClient(process.env.DISCORD_BOT_TOKEN)

  const dmChannel = await discord.createDM(user.discordId)

  let requestData: unknown

  try {
    requestData = await req.json()
  } catch (err) {
    return NextResponse.json(
      {
        message: "Invalid JSON request body",
      },
      { status: 400 }
    )
  }

  const ValidationResult = REQUEST_VALIDATOR.parse(requestData)

  const category = user.EventCategory.find(
    (cat) => cat.name === ValidationResult.category
  )

  if (!category) {
    return NextResponse.json(
      {
        message: `You don't have access to the category ${ValidationResult.category}`,
      },
      { status: 400 }
    )
  }

  const eventData = {
    title: `${category.emoji || "🔔"} ${
      category.name.charAt(0).toUpperCase() + category.name.slice(1)
    } `,
    description:
      ValidationResult.description ||
      ` A new ${category.name} event has occured.`,
    color: category.color,
    timeStamp: new Date().toISOString(),
    fields: Object.entries(ValidationResult.Fields || {}).map(
      ([key, value]) => {
        return {
          name: key,
          value: String(value),
          inline: true,
        }
      }
    ),
  }

  const event = await db.event.create({
    data: {
      name: category.name,
      formatedMessage: `${eventData.title}\n\n ${eventData.description}`,
      userId: user.id,
      fields: ValidationResult.Fields || {},
      eventCategoryId: category.id,
    },
  })

  try {
    await discord.sendEmbed(dmChannel.id, eventData)

    await db.event.update({
      where: { id: event.id },
      data: { deliveryStatus: "SUCCESS" },
    })

    await db.quota.upsert({
      where: { userId: user.id, month: currentMonth, year: currentYear },
      update: { count: { increment: 1 } },
      create: {
        userId: user.id,
        month: currentMonth,
        year: currentYear,
        count: 1,
      },
    })
  } catch (err) {
    await db.event.update({
      where: { id: event.id },
      data: { deliveryStatus: "FAILED" },
    })

    console.log(err)

    return NextResponse.json(
      {
        message: "Error processing event",
        eventId: event.id,
      },
      {
        status: 500,
      }
    )
  }

  return NextResponse.json({
    message: "Event processed successfully",
    eventId: event.id,
  })
}
