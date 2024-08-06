## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

## 👨🏻‍💻 Getting Started

### Prerequisites

- Node.js (>=20.x)
- pnpm or npm

### Installation

1. Clone the repository:

   ```
   bash
   git clone https://github.com/ByronMike/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. Install dependencies:

```
pnpm install
```

3. Running the database (after setting up the env variables)

```
pnpm i @vercel/postgres
```

4. Seed the database

Inside of /app, there's a folder called seed. This folder contains a Next.js Route Handler, called route.ts, that will be used to seed your database. This creates a server-side endpoint that you can access in the browser to start populating your database.

Ensure your local development server is running with pnpm run dev and navigate to localhost:3000/seed in your browser. When finished, you will see a message "Database seeded successfully" in the browser. Once completed, you can delete this file.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
