# Alfan Aziz — Personal Website

A photography-led personal website for technology, AI, creative work, and stories from
the street. Built with Astro and deployed as a static site to GitHub Pages.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Astro. To create and preview the production build:

```sh
npm run build
npm run preview
```

The static site, including `index.html`, is generated in `dist/`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub
Pages whenever a commit is pushed to `main`, or when manually started from the Actions
tab. In the repository’s **Settings → Pages**, select **GitHub Actions** as the build
and deployment source.

Astro is configured for the `https://alfanazizi.github.io` user site, so the root base
path is `/`. If the site moves to a project repository, update `site` and `base` in
`astro.config.mjs`, as well as the canonical URL, social preview URL, sitemap, and
robots file in the site source.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages build and deployment
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── script.js                 # Mobile navigation and photo lightbox
│   └── sitemap.xml
├── src/
│   ├── env.d.ts
│   ├── pages/
│   │   └── index.astro           # Homepage and portfolio sections
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Updating the site

- Edit the page content, gallery entries, projects, and verified social profiles in
  `src/pages/index.astro`.
- Add owned, optimized photographs to `public/images/` and point the gallery and hero
  image sources to those files. Current gallery images are remote visual placeholders;
  replace them with your own photography before presenting the gallery as a personal
  portfolio.
- Keep `public/sitemap.xml` up to date if you add pages, and update the social preview
  image metadata when a custom share image is available.

The site is static and needs no backend. It includes responsive layouts, reduced-motion
support, a keyboard-dismissable photo lightbox, SEO and Open Graph metadata, structured
data, and a sitemap/robots setup.
