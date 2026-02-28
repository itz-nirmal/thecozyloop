# The Cozy Loop (TCL)

A modern e-commerce web application for "The Cozy Loop" - a handcrafted crochet and gift shop. Built with the T3 Stack, this application provides a seamless shopping experience with beautiful UI components, user authentication, and real-time features.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Prisma](https://img.shields.io/badge/Prisma-6.6-2d3748)

---

## 📋 Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## About

**The Cozy Loop** is an e-commerce platform specializing in handmade crochet items and thoughtful gifts. The application features a visually stunning landing page with:

- Beautiful hero banners with product highlights
- Product catalog showcasing various categories
- Featured products section
- User-generated video content (UGC)
- Customer reviews and testimonials
- FOMO (Fear of Missing Out) popup notifications
- User authentication system

---

## Tech Stack

This project is built with the **T3 Stack** - a fully TypeScript stack for building production-ready applications:

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 15.2.3 | React framework with App Router |
| [React](https://react.dev) | 19.0.0 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.8.2 | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com) | 4.0.15 | Utility-first CSS framework |
| [Prisma](https://prisma.io) | 6.6.0 | Database ORM |
| [tRPC](https://trpc.io) | 11.0.0 | End-to-end typesafe APIs |
| [NextAuth.js](https://next-auth.js.org) | 5.0.0-beta.30 | Authentication |
| [PostgreSQL](https://www.postgresql.org) | - | Database |
| [Zod](https://zod.dev) | 3.24.2 | Schema validation |
| [Swiper](https://swiperjs.com) | 12.1.2 | Touch slider library |
| [Lucide React](https://lucide.dev) | 0.575.0 | Icon library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11.0.5 | Toast notifications |
| [Lottie React](https://lottiefiles.com/lottie-react) | 2.4.1 | Animation library |

---

## Features

### Core Features

- **Landing Page Components**
  - Hero banner with animated elements
  - Product catalog with multiple categories (Flowers, Bouquets, Bags, Keychains, Gifts, Soft Toys, Bookmarks)
  - Featured products carousel
  - User-generated video section
  - Customer reviews with ratings
  - Comprehensive footer with navigation

- **User Authentication**
  - Discord OAuth integration
  - Session management
  - Protected routes

- **FOMO Notifications**
  - Real-time popup notifications
  - Purchase activity indicators
  - Configurable notification settings

- **Responsive Design**
  - Mobile-first approach
  - Tablet-optimized layouts
  - Desktop enhancements
  - Custom responsive breakpoints

- **Additional Pages**
  - Contact page
  - Cookie policy
  - Privacy policy
  - Return, refund & cancellation policy
  - Terms of service
  - Login/Signup pages

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Software | Version | Notes |
|----------|---------|-------|
| [Node.js](https://nodejs.org) | ≥20.x | LTS recommended |
| [npm](https://www.npmjs.com) | ≥10.x | Comes with Node.js |
| [PostgreSQL](https://www.postgresql.org) | ≥14.x | Local database |
| [Docker](https://www.docker.com) | Latest | For database container (optional) |

### Optional Software

- [Docker Desktop](https://www.docker.com/products/docker-desktop) - For running PostgreSQL in a container
- [VS Code](https://code.visualstudio.com) - Recommended IDE
- [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) - For Windows users wanting to run shell scripts

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd thecozyloop
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages and automatically run `prisma generate` via the `postinstall` script.

---

## Environment Variables

### 1. Create Environment File

Copy the example environment file:

```bash
cp .env.example .env
```

### 2. Configure Variables

Edit the `.env` file with your specific values:

```env
# Next Auth
# Generate a secret with: npx auth secret
AUTH_SECRET="your-generated-secret-here"

# Next Auth Discord Provider
# Get credentials from https://discord.com/developers/applications
AUTH_DISCORD_ID="your-discord-client-id"
AUTH_DISCORD_SECRET="your-discord-client-secret"

# Prisma
# PostgreSQL connection string
DATABASE_URL="postgresql://postgres:your-password@localhost:5432/thecozyloop"

# Node Environment
NODE_ENV="development"
```

### Generating AUTH_SECRET

Run the following command to generate a secure secret:

```bash
npx auth secret
```

### Setting Up Discord OAuth

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to "OAuth2" in the sidebar
4. Add a redirect to `http://localhost:3000/api/auth/callback/discord`
5. Copy the Client ID and Client Secret to your `.env` file

---

## Database Setup

### Option 1: Using Docker (Recommended for Development)

Run the included database startup script:

```bash
# On Windows (using WSL)
./start-database.sh

# Or run the docker command directly
docker run -d \
  --name thecozyloop-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=your-password \
  -e POSTGRES_DB=thecozyloop \
  -p 5432:5432 \
  docker.io/postgres
```

### Option 2: Using Local PostgreSQL

1. Install PostgreSQL on your machine
2. Create a new database named `thecozyloop`
3. Update the `DATABASE_URL` in `.env` to point to your local instance

### 3. Run Database Migrations

After setting up your database, apply the schema:

```bash
# Push schema to database (development)
npm run db:push

# Or create and apply migrations (production-ready)
npm run db:generate
npm run db:migrate
```

### 4. (Optional) Open Prisma Studio

To visually explore your database:

```bash
npm run db:studio
```

This opens a web interface at `http://localhost:5555` where you can view and edit data.

---

## Running the Application

### Development Mode

Start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Build and start the production server:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

Or use the combined preview command:

```bash
npm run preview
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run preview` | Build and preview the production build |
| `npm run lint` | Run ESLint for code linting |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format:check` | Check code formatting with Prettier |
| `npm run format:write` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run check` | Run lint and typecheck |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:generate` | Generate Prisma Client |
| `npm run db:migrate` | Apply database migrations |
| `npm run db:studio` | Open Prisma Studio |
| `npm run postinstall` | Generate Prisma Client (runs automatically after npm install) |

---

## Project Structure

```
thecozyloop/
├── .env.example              # Environment variable template
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── prettier.config.js        # Prettier configuration
├── start-database.sh        # Database startup script
├── tsconfig.json             # TypeScript configuration
│
├── assets/                   # Static assets
│   ├── Banner/              # Hero banner images
│   │   ├── Desktop/        # Desktop banner images
│   │   └── Mobile/         # Mobile banner images
│   ├── Brand Assets/        # Logo and brand images
│   ├── Catalog/             # Product catalog images
│   └── Icons/               # Icon assets
│
├── generated/               # Generated code
│   └── prisma/             # Prisma generated files
│
├── prisma/                  # Database schema
│   └── schema.prisma       # Prisma schema definition
│
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   │   ├── auth/       # NextAuth.js routes
│   │   │   └── trpc/       # tRPC API routes
│   │   ├── feature/        # Feature components
│   │   │   └── FOMO-Popup/ # FOMO notification system
│   │   ├── page/           # Page components
│   │   │   ├── contact/
│   │   │   ├── cookies/
│   │   │   ├── login/
│   │   │   ├── privacy/
│   │   │   ├── return-refund-cancellation/
│   │   │   ├── signup/
│   │   │   └── terms/
│   │   ├── _components/    # Reusable components
│   │   │   └── landing/    # Landing page components
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   │
│   ├── env.js             # Environment validation
│   ├── server/            # Server-side code
│   │   ├── auth/          # Authentication config
│   │   ├── api/           # tRPC routers
│   │   └── db.ts          # Database client
│   │
│   ├── styles/            # Global styles
│   │   └── globals.css    # Global CSS with custom utilities
│   │
│   └── trpc/              # tRPC client setup
│       ├── query-client.ts
│       ├── react.tsx
│       └── server.ts
│
└── README.md              # This file
```

### Key Directories

- [`src/app/_components/landing/`](src/app/_components/landing/) - Landing page UI components
- [`src/app/feature/FOMO-Popup/`](src/app/feature/FOMO-Popup/) - FOMO notification system
- [`src/server/api/routers/`](src/server/api/routers/) - tRPC API endpoints
- [`prisma/schema.prisma`](prisma/schema.prisma) - Database schema definition
- [`src/styles/globals.css`](src/styles/globals.css) - Global styles and animations

---

## Deployment

### Vercel (Recommended)

The easiest way to deploy Next.js applications:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy with automatic builds

```bash
# Using Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production

Ensure these are set in your deployment platform:

- `AUTH_SECRET` - Must be set in production
- `AUTH_DISCORD_ID` - Discord OAuth client ID
- `AUTH_DISCORD_SECRET` - Discord OAuth client secret
- `DATABASE_URL` - Production database connection string
- `NODE_ENV` - Set to `production`

### Docker Deployment

Create a Dockerfile for containerized deployment:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

---

## Code Quality

### Linting

This project uses ESLint with Next.js recommended configurations:

```bash
# Check for linting errors
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Formatting

Code formatting is handled by Prettier with Tailwind CSS plugin:

```bash
# Check formatting
npm run format:check

# Format code
npm run format:write
```

### TypeScript

Strict type checking is enabled:

```bash
# Type check the project
npm run typecheck

# Full check (lint + typecheck)
npm run check
```

---

## Troubleshooting

### Common Issues

#### Database Connection Errors

- Verify PostgreSQL is running: `pg_isready` or check Docker container status
- Confirm `DATABASE_URL` in `.env` is correct
- Check firewall settings allow connection to the database port

#### Prisma Client Errors

- Regenerate Prisma Client: `npx prisma generate`
- Delete `node_modules/.prisma` folder and reinstall

#### NextAuth.js Errors

- Ensure `AUTH_SECRET` is set
- Verify Discord OAuth credentials are correct
- Check redirect URIs match in Discord developer portal

#### Port Already in Use

- Find process using port 3000: `netstat -ano | findstr :3000` (Windows)
- Kill the process or use a different port: `npm run dev -- -p 3001`

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is private and proprietary. All rights reserved.

---

## Acknowledgments

- [T3 Stack](https://create.t3.gg/) - For the excellent project scaffolding
- [Next.js](https://nextjs.org/) - For the powerful React framework
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Create T3 App](https://github.com/t3-oss/create-t3-app) - For the project template

---

## Support

For issues and questions, please open an issue on the project repository.

---