# Zahlé Luxe Store - Backend

Backend API for the Zahlé Luxe Store e-commerce platform.

## Tech Stack

- Node.js 24+
- Express 5
- TypeScript (strict mode)
- MongoDB + Mongoose (to be configured)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`

4. Run development server:
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Check TypeScript types

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Express middleware
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript types
├── utils/          # Utility functions
├── app.ts          # Express app setup
└── server.ts       # Server entry point
```

