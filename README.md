# Damir — Portfolio

A personal portfolio for Damir, a Computer Science student at IITU in Almaty, Kazakhstan. The site introduces my background, current learning goals, skills, and projects.

## Features

- Responsive home page with an interactive learning timeline and current focus section
- Project cards linking to GitHub repositories
- Dedicated Skills page at `/skills`
- English, Russian, and Kazakh language options
- Responsive layouts for desktop, tablet, and mobile screens

## Built with

- React 18 and TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Getting started

Install dependencies:

```bash
npm ci
```

Start the development server at [http://localhost:3001](http://localhost:3001):

```bash
npm run dev -- --port 3001
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev -- --port 3001` | Start the local development server on port 3001 |
| `npm run build` | Type-check the project and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
  App.tsx        Home page and project content
  SkillsPage.tsx Skills page
  i18n.tsx       Language selection and translations
  styles.css     Global styles and responsive layouts
```

## Production build

```bash
npm run build
```

The generated site is written to `dist/`. To preview it locally:

```bash
npm run preview
```
