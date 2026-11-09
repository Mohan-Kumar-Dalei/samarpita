# Samarpita — Seva hi Samarpan

Website for **Team Samarpita**, a team of social workers from Odisha who help anyone in need.
People can share their problem through the Contact Us page, and blood donors can register on the Blood Donation page. Both reach the team by email.

**Live site:** https://mohan-kumar-dalei.github.io/samarpita/

## Pages
- Home
- About Us
- Blood Donation (donor registration, eligibility check, blood group guide)
- Support Us (donate, volunteer, partner)
- Contact Us (problem form that sends an email)
- Privacy Policy and Terms & Conditions (linked from the footer)

## Tech
React + Vite, Tailwind CSS v4, GSAP (ScrollTrigger), Framer Motion, Lenis smooth scroll, Phosphor Icons.
Black and green theme with a light/dark mode toggle. Photos are served from ImageKit.

## Run locally
```bash
npm install
npm run dev
```

## Customise
- Contact details, stats and stories: `src/data/site.js`
- Photos: upload to the ImageKit folder `samarpita/` and add the file name to `images` in `src/data/site.js`.
- Colours and dark mode: CSS variables at the top of `src/index.css`.
- All forms (contact, blood donor, volunteer) send mail to `site.email` using [FormSubmit](https://formsubmit.co). After the first message, FormSubmit sends a one-time activation email to that address. Click the link in it once and every message after that is delivered.

## Deploy
Every push to `main` builds the site and publishes it to the `gh-pages` branch through GitHub Actions.
