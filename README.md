# Mark Anthony Canta Portfolio

A responsive one page developer portfolio inspired by the dark charcoal, teal, and cyan visual style in the supplied reference image.

## Recommended technology

Use **React with TypeScript and Vite**.

- **React** keeps sections, project cards, navigation, and future case studies component based.
- **TypeScript** catches common errors and keeps project data structured.
- **Vite** provides a fast development server and an optimized production build.
- **Modern CSS** handles the visual theme without a heavy UI framework.

## Run the React version

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

For a production build:

```bash
npm run build
```

The generated site will be in the `dist` folder.

## Quick preview without installing React

Open `preview/index.html` in a browser. This static preview uses the same design and content, but the React version is the recommended production source.

## Main files

- `src/App.tsx`: page structure, interactions, navigation, contact form behavior
- `src/data.ts`: project and resume content
- `src/styles.css`: full responsive design system
- `public/pattern.svg`: subtle developer icon pattern
- `public/resumes`: downloadable resume files

## Customize the portfolio

### Add real project links and screenshots

Edit each project in `src/data.ts`. Add optional fields such as `url`, `github`, or `image`, then render the links inside `ProjectCard` in `src/App.tsx`.

Avoid publishing client-confidential work. Use approved screenshots, anonymized case studies, or project summaries when needed.

### Update colors

Edit the variables at the top of `src/styles.css`:

```css
--bg: #10171e;
--surface: #19242d;
--accent: #19d7c7;
--accent-2: #0799e7;
```

### Make the contact form submit directly

The included form opens the visitor's email app. For direct submissions, connect one of these:

- Formspree
- Resend with a serverless function
- A FastAPI or Laravel endpoint
- Netlify Forms

### Deploy

Good options are Vercel, Netlify, Cloudflare Pages, or Hostinger static hosting.

For Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`

## Content note

The portfolio descriptions are based on the supplied WordPress, Shopify, and AI Agent resumes. The project titles are representative labels because specific public project names and URLs were not provided.
