# Raghav Khandelwal Portfolio

Personal portfolio site for Raghav Khandelwal, built with React and customized from the Cleanfolio starter.

Live site: [raghavk.dev](https://raghavk.dev/)

## What is in this site

- About section with resume link and social profiles
- Experience section with hover-reveal highlights
- Project cards for selected work
- Skills section covering backend, AI, cloud, and full-stack tools
- Contact section for direct outreach

## Tech stack

- React 17
- JavaScript
- Material UI
- CSS

## Local development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm start
```

Create a production build:

```sh
npm run build
```

## Content source

Most portfolio content lives in `src/portfolio.js`.

That file controls:

- header info
- about text
- resume URL
- social links
- experience entries
- project cards
- skills list
- contact email

## Project assets

- Local images go in `public/images/`
- Resume files can live in `public/` or be linked from an external URL
- Project links are shown only when `sourceCode` or `livePreview` is provided

## Deployment

This project uses Create React App.

For a standard deploy flow:

```sh
npm run build
```

If deploying to GitHub Pages, this repo already includes:

```sh
npm run deploy
```

If deploying to Vercel or another root-domain host, make sure the `homepage` value in `package.json` matches the final domain behavior you want.

## Profiles

- GitHub: [Raghav847](https://github.com/Raghav847)
- LinkedIn: [raghav-k847](https://www.linkedin.com/in/raghav-k847/)
- LeetCode: [Badbane](https://leetcode.com/u/Badbane/)

## Notes

- The portfolio content is intentionally concise and resume-aligned.
- External project and demo links can be updated directly in `src/portfolio.js`.
- The site was originally based on Cleanfolio, but the content and structure here are personalized for this portfolio.
