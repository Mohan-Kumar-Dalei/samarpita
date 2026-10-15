# Samarpita — Seva hi Samarpan

Website for **Samarpita**, a team of social workers who help anyone in need.
People can share their problem through the Contact Us page and it reaches the team by email.

**Live site:** https://mohan-kumar-dalei.github.io/samarpita/

## Pages
- Home
- About Us
- Support Us (donate, volunteer, partner)
- Contact Us (problem form that sends an email)
- Privacy Policy and Terms & Conditions (linked from the footer)

## Tech
React + Vite, Tailwind CSS v4, GSAP (ScrollTrigger), Framer Motion, Lenis smooth scroll, Phosphor Icons.

## Run locally
```bash
npm install
npm run dev
```

## Customise
- Contact details, team, stats and stories: `src/data/site.js`
- Photos are placeholders. Replace the URLs in `images` inside `src/data/site.js` with the team's real photos.
- The contact form sends mail to `site.email` using [FormSubmit](https://formsubmit.co). After the first message, FormSubmit sends a one-time activation email to that address. Click the link in it once and every message after that is delivered.

## Deploy
Every push to `main` builds the site and publishes it to the `gh-pages` branch through GitHub Actions.
