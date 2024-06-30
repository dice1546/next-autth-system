# Authentication System

An authentication system built with Next.js using NextAuth.js.

## Prerequisites

Before running the app, make sure to add the following environment variables:

- `DATABASE_URL` - URL for storing user data
- `AUTH_SECRET` - Authentication secret
- `GITHUB_CLIENT_ID` - Your GitHub client ID (generate from [github.com](https://github.com))
- `GITHUB_CLIENT_SECRET` - Your GitHub client secret (generate from [github.com](https://github.com))
- `GOOGLE_CLIENT_ID` - Your Google client ID (get it from Google Cloud)
- `GOOGLE_CLIENT_SECRET` - Your Google client secret (get it from Google Cloud)
- `RESEND_API_KEY` - API key from [resend.com](https://resend.com)

## Installation

Once you have added the above environment variables, you can run the following commands to install dependencies and start the development server:

```bash
npm install
npm run dev

npx prisma generate
npx prisma db push

npx prisma studio
```
