# WDD 430 Portfolio

A responsive TypeScript portfolio built with the Next.js App Router and Tailwind CSS for the WDD 430 course assignment.

The visual direction uses a polished feminine editorial system: blush, plum, rose, and lavender accents; serif display typography; soft rounded cards; and subtle decorative shapes balanced with accessible contrast and clear information hierarchy.

## Routes

- `/` — portfolio home page with two project case studies
- `/about` — background and typed `SkillCard` components
- `/api/hello` — JSON API route returning `{ "message": "Hello from Next.js API!" }`

## Custom component

`components/SkillCard.tsx` accepts a `skill` and `detail` prop and displays a capability card on the About page.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

- GitHub: https://github.com/devinephoebe433-eng/wdd430-portfolio
- Vercel: https://wdd430-portfolio-one-navy.vercel.app
