# DongHyeon Kang — Personal Website

An English personal website built with Docusaurus and hosted on GitHub Pages at
[kang.me.kr](https://kang.me.kr/).

## Development

Requires Node.js 20 or later.

```bash
npm ci
npm start
```

Open http://localhost:3000. To preview a production build:

```bash
npm run build
npm run serve
```

## Updating content

- `src/data/profile.js`: name, role, location, GitHub, optional email, interests,
  and news. Dates for news use `YYYY-MM`. An empty news list hides the section.
- `src/data/publications.js`: paper titles, authors in published order, venues,
  DOI links, and videos. The `self` field highlights your name.
- `src/pages/index.js`: English introduction and homepage sections.
- `src/pages/index.module.css`: profile, homepage layout, and mobile styling.
- `src/css/custom.css`: shared typography, colors, navigation, and footer.
- `static/img/profile.jpeg`: profile photograph.
- `docs/` and `blog/`: documentation and blog content. These currently include
  the original Docusaurus sample content.

Set `profile.email` to a real address to show the Email link. Leave it `null`
to hide the link. Add only verified personal details and news.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes the `build/` directory to the `gh-pages` branch.
`static/CNAME` preserves the `kang.me.kr` custom domain.
