# shanemcfadden.dev

Personal portfolio website showcasing professional background, projects, skills, and contact information. Built with Next.js and deployed as a static site.

## Required Tools

- [Node.js](https://nodejs.org/) 24+
- [pnpm](https://pnpm.io/) 10.13+

This project uses [mise](https://mise.jdx.dev/) for tool version management. ## Getting Started

1. Install dependencies:

   ```sh
   pnpm install
   ```

2. Start the development server:

   ```sh
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script         | Description                           |
| -------------- | ------------------------------------- |
| `dev`          | Start development server              |
| `build`        | Build static site to `out/` directory |
| `start`        | Serve the built static site locally   |
| `lint`         | Run ESLint                            |
| `lint:fix`     | Run ESLint with auto-fix              |
| `format`       | Format code with Prettier             |
| `format:check` | Check code formatting without changes |
