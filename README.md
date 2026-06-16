# Portfolio Website

A modern portfolio website built with React, Vite, Tailwind CSS, Framer Motion, React Router, EmailJS, and dynamic data-driven components.

## Folder Structure

```
Portfilo/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── sitemap.xml
├── README.md
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   └── useScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   └── components/
│       ├── About/
│       │   └── About.jsx
│       ├── Achievements/
│       │   └── Achievements.jsx
│       ├── Certifications/
│       │   └── Certifications.jsx
│       ├── Common/
│       │   ├── SectionCard.jsx
│       │   └── SectionWrapper.jsx
│       ├── Contact/
│       │   └── Contact.jsx
│       ├── Education/
│       │   └── Education.jsx
│       ├── Experience/
│       │   └── Experience.jsx
│       ├── Footer/
│       │   └── Footer.jsx
│       ├── Hero/
│       │   └── Hero.jsx
│       ├── Navbar/
│       │   └── Navbar.jsx
│       ├── Projects/
│       │   └── Projects.jsx
│       └── Skills/
│           └── Skills.jsx
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment

### Vercel
1. Install Vercel CLI (optional):
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```
3. Configure build command: `npm run build`
4. Set output directory: `dist`

### Netlify
1. Connect repository to Netlify.
2. Set build command to `npm run build`.
3. Set publish directory to `dist`.

### GitHub Pages
1. Add `homepage` in `package.json` if using a custom domain.
2. Build the app:
   ```bash
   npm run build
   ```
3. Deploy `dist` folder using GitHub Pages deployment action or branch.

## Best Practices

- Use `src/data/portfolioData.js` to manage content.
- Keep layout and content separated.
- Use reusable components and `SectionWrapper` for consistency.
- Keep animations subtle and accessible.
- Replace placeholder EmailJS keys with real credentials.
- Update `index.html` with live site URLs and OG image paths.

## Production Notes

- SEO-ready via metadata + JSON-LD structured data.
- Route lazy loading implemented in `src/App.jsx`.
- Sitemap available at `/sitemap.xml`.
- Accessible ARIA attributes and keyboard-ready components.
- Responsive Tailwind layout across desktop and mobile.

## Comments

- `src/App.jsx`: lazy-loaded page routes.
- `src/data/portfolioData.js`: central data source for all sections.
- `src/components/Common/SectionWrapper.jsx`: consistent section spacing and animation.
- `src/components/Projects/Projects.jsx`: dynamic filtering and modal details.
- `src/components/Contact/Contact.jsx`: React Hook Form validation and EmailJS integration.
