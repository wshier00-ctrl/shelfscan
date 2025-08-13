# ShelfScan — Minimal Working App (Next.js + Google Login)

This repo is ready for Vercel. It includes:
- Next.js 14 (pages router)
- NextAuth v4 with Google provider
- Protected page example

## Environment variables (Vercel → Settings → Environment Variables)
- NEXTAUTH_URL = https://YOUR_VERCEL_URL
- NEXTAUTH_SECRET = (long random string)
- GOOGLE_CLIENT_ID = from Google Cloud
- GOOGLE_CLIENT_SECRET = from Google Cloud

## Local dev
1. Create `.env.local` in the project root with the vars above.
2. npm install
3. npm run dev
