# Zahlé Luxe Store - Frontend

Modern e-commerce frontend built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- React 19
- TypeScript (strict mode)
- Vite
- Tailwind CSS v4
- React Router v7
- Zustand (state management)
- React Hook Form + Zod
- Axios

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Run development server:
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout components
│   ├── ui/          # Reusable UI components (Button, Input, etc.)
│   └── pages/       # Page-specific components
├── pages/           # Route pages
├── stores/          # Zustand stores
├── services/        # API services
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── styles/          # Global styles
└── types/           # TypeScript types
```

