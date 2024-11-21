# Real-time Event Monitoring and Notification SaaS

This project is a Real-time Event Monitoring and Notification SaaS designed to provide instant notifications for critical events directly to Discord. It leverages a modern tech stack to ensure efficient event tracking, real-time notifications, and robust user management.

## Key Features
- **Real-time Notifications**: Alerts for critical events via Discord.
- **User Management**: Authentication and quota management using Clerk.
- **Event Tracking**: Log and monitor events like sales and user sign-ups.
- **Dashboard and Insights**: Real-time analytics on tracked events.
- **API Integration**: RESTful API for event logging and management.
- **Caching**: Enhanced performance with Upstash Redis.
- **Serverless Architecture**: Uses Neon for PostgreSQL and Cloudflare Workers for backend operations.
- **Data Validation**: Ensured with TypeScript and Zod.
- **Responsive UI**: Built with Next.js, React, and Tailwind CSS.

## Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, Radix UI.
- **Backend**: Prisma, Neon, Upstash Redis, Hono, SuperJSON, Zod.
- **Authentication**: Clerk.
- **API**: Discord.js, NextResponse.
- **DevOps**: Wrangler.
- **Database**: @neondatabase/serverless, @prisma/adapter-neon.
- **Caching**: @upstash/redis.
- **Utilities**: clsx, date-fns, class-variance-authority.

- ## Layout page
![Screenshot 2024-11-21 095303](https://github.com/user-attachments/assets/2d0c4e44-5c83-4c4d-994c-75078a745d9c)
## Discord ui demo 
![Screenshot 2024-11-21 095316](https://github.com/user-attachments/assets/699a78bb-2d0b-47ba-80fd-0426cdd09953)
![Screenshot 2024-11-21 095327](https://github.com/user-attachments/assets/89ecd3c1-1b57-4f6a-9eaf-117b36dacaa7)
## Customeer review
![Screenshot 2024-11-21 095338](https://github.com/user-attachments/assets/93e47042-7593-4c54-95d1-d57fed99b3d8)
## Clerk auth
![Screenshot 2024-11-21 095353](https://github.com/user-attachments/assets/b029f687-82f9-4823-8b33-76bd2e70bb26)
## Dashboard 
![Screenshot 2024-11-21 095419](https://github.com/user-attachments/assets/ccb0ef96-b253-424b-b4d0-fd014755599c)
## Events page
![Screenshot 2024-11-21 095439](https://github.com/user-attachments/assets/1ff8041e-622e-4b1e-a4b3-0f2884565890)
## api end point testing 
![Screenshot 2024-11-21 095516](https://github.com/user-attachments/assets/dc1d1fd9-f192-4ee9-8d51-75ba3e11d804)
## Sale event update instantly 
![Screenshot 2024-11-21 095529](https://github.com/user-attachments/assets/17c43362-6002-42f9-819a-10566ed07f01)
## Prisma studio updated 
![Screenshot 2024-11-21 095543](https://github.com/user-attachments/assets/942dd9b3-e8eb-4640-a868-dd84e27eb52a)
## Creating new Category
![Screenshot 2024-11-21 095622](https://github.com/user-attachments/assets/9e945d24-b7e3-4636-9996-e396459d5105)
## New category in dashborad instantly 
![Screenshot 2024-11-21 095633](https://github.com/user-attachments/assets/dc3e774b-d1eb-4cbd-9e8e-3ce1779ba49c)
## Category Dletion
![Screenshot 2024-11-21 095642](https://github.com/user-attachments/assets/47f05e77-54d0-493a-8376-407d511265fc)
## Category Deleted from Dashboard and database neon 
![Screenshot 2024-11-21 095653](https://github.com/user-attachments/assets/fd82c437-ffa4-4df0-8198-297e70bb6cec)
## Signout 
![image](https://github.com/user-attachments/assets/5a50695d-a490-4eb0-8ff2-d89537aff943)
## Signout Successful
![image](https://github.com/user-attachments/assets/50453ec8-9a39-41cc-8897-630d530b772f)
## Clerk account management
![image](https://github.com/user-attachments/assets/cdcbfc51-065b-4206-afcb-4f5e905e9e18)




## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy 

.env.example

 to ![Screenshot 2024-11-21 095653](https://github.com/user-attachments/assets/5974da57-56e2-49a0-9cef-1ea939a0239b)


.env

 and fill in the required values.

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

### API Endpoints

- **POST /api/v1/events**: Log a new event.
  ```json
  {
    "category": "sale",
    "fields": {
      "plan": "PRO",
      "email": "example@example.com",
      "amount": 49.00
    }
  }
  ```

### Example Code Snippet
```typescript
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
await discord.sendEmbed(dmChannel.id, {
  title: "hello world",
})

return NextResponse.json({ message: "Event logged and notification sent." })
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the 

LICENSE

 file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---

Star the repo if you find it useful!
```

This `README.md` file provides a comprehensive overview of your project, including key features, tech stack, installation instructions, usage examples, and contribution guidelines.
This `README.md` file provides a comprehensive overview of your project, including key features, tech stack, installation instructions, usage examples, and contribution guidelines.
