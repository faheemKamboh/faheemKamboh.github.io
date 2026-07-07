# Faheem Ul Islam Portfolio

Personal portfolio site for **Faheem Ul Islam Arshad Kamboh**.

The site presents full-stack engineering work across Ruby, Ruby on Rails, Python, React, open-source Ruby tooling, and practical AI-assisted product development.

## Tech stack

- React
- Vite
- React Router
- CSS custom properties
- Netlify preview hosting
- GitHub Pages deployment support

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Netlify preview

The preview domain is:

```text
https://faheemulislam.netlify.app
```

The project includes `netlify.toml` so clean client-side routes such as `/blog/what-is-ai-in-simple-words` can load correctly on refresh.

## SEO assets

The site includes:

- page metadata in `index.html`
- runtime metadata helper in `src/components/Seo.jsx`
- `public/robots.txt`
- `public/sitemap.xml`
- clean blog article URLs
- structured data for the homepage and article pages

## Profile photo

The current implementation uses a temporary avatar asset at:

```text
public/avatar.svg
```

Replace it with a real profile image when available. If the replacement uses another filename or extension, update `PROFILE.avatar` in:

```text
src/data/profile.js
```

## Content notes

Some open-source work was completed through company-assigned development profiles. Those contributions are described transparently as professional open-source contribution experience, not as personal account ownership.

## Contact

Email: `im@faheemulislam.com`

GitHub: <https://github.com/faheemkamboh>

LinkedIn: <https://www.linkedin.com/in/faheem-ul-islam-arshad-b5a748218>
