import { MaxWidthWrapper } from "../../components/max-width-wrapper"
import { Heading } from "../../components/heading"
import { Check } from "lucide-react"
import { ShinyButton } from "../../components/shiny-button"
import { MockDiscordUI } from "../../components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center ">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              PingPanda is the Easiest Way to Monitor Your SaaS. Get instant
              notification for{" "}
              <span className="font-semibold text-gray-700">
                sales, new sers , or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>
            <ul
              className="space-y-2 text-base/7 text-gray-600 text-left
             flex flex-col sm:items-start"
            >
              {[
                "Real-Time Discord alerts for critical events ",
                "Buy once , user Forever",
                "Trace sales, new users, or any other events",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700 " />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    username="PingPanda"
                    avatarAlt="PingPanda Avatar"
                    timestamp="Today at 12:35PM"
                    badageColor="#43b581"
                    badageText="Sign Up"
                    title="👤 New User Signed up "
                    content={{
                      name: "John Doe",
                      email: "example@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    username="PingPanda"
                    avatarAlt="PingPanda Avatar"
                    timestamp="Today at 12:35PM"
                    badageColor="#faa61a"
                    badageText="Revenue"
                    title="💰 Payment Recived"
                    content={{
                      amount: "$100",
                      email: "example2@gmail.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    username="PingPanda"
                    avatarAlt="PingPanda Avatar"
                    timestamp="Today at 12:35PM"
                    badageColor="#5856f2"
                    badageText="Milestone"
                    title=" 🚀 Revenue Milestone Achived"
                    content={{
                      recurringRevenue: "$1000",
                      growth: "8.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* {firsst bento grid element } */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] " />
              <div></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </>
  )
}

export default Page
