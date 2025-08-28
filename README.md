# Nuxt with authentication and Laravel API

A modern Nuxt 4 application with TypeScript, Tailwind CSS, and authentication features. It uses Laravel API for authentication and authorization.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nuxt-demo
```

2. Install dependencies using Bun:

```bash
bun install
```

3. Copy environment variables (if needed):

```bash
cp .env.example .env
```

The `NUXT_PUBLIC_API_URL` is the URL of the LaravelAPI.

## Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`

## Build

Generate static site:

```bash
bun run generate
```

Preview the generated site:

```bash
bun run preview
```

## Tech Stack

- **Nuxt 4** - Vue.js framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Pinia** - State management
- **shadcn-nuxt** - UI components
- **Axios** - HTTP client
