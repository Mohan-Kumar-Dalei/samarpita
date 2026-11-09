# Samarpita Social Foundation Trust — Seva hi Samarpan

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
- Contact details, stats, stories and Instagram reels: `src/data/site.js`
- Logo: `public/brand/` (and `public/favicon.png`)
- Photos: upload to the ImageKit folder `samarpita/` and add the file name to `images` in `src/data/site.js`.
- Colours and dark mode: CSS variables at the top of `src/index.css`.
- All forms (contact, blood donor, volunteer, feedback) send mail to `site.email` using [FormSubmit](https://formsubmit.co). After the first message, FormSubmit sends a one-time activation email to that address. Click the link in it once and every message after that is delivered.

## Admin panel (blood donors & feedback)
Open `/#/admin` on the site, e.g. https://mohan-kumar-dalei.github.io/samarpita/#/admin

- See every registered blood donor, filter by blood group / district / status, call or WhatsApp them, export CSV
- Mark a donor as **Donated** to create a luxury thank-you card (download as PNG or send on WhatsApp)
- Donors who agreed are shown on the public **Blood Heroes** wall (name, group, district only)
- Read feedback sent from the Contact page and choose which to show on the website

### Demo mode
Until Firebase is connected, the site runs in demo mode: data is saved only in the visitor's own browser
and the admin password is `samarpita-demo`. Form emails still reach the team through FormSubmit.

### Go live with Firebase (free plan is enough)
1. Create a project at https://console.firebase.google.com
2. **Build → Firestore Database → Create database** (production mode)
3. **Firestore → Rules**: paste the contents of `firestore.rules` and publish
4. **Build → Authentication → Sign-in method**: enable **Google**
5. **Authentication → Settings → Authorized domains**: add `mohan-kumar-dalei.github.io`
6. **Project settings → Your apps → Web app**: copy the config into `src/lib/firebaseConfig.js`
7. Push to `main`. Sign in to `/#/admin` with the Google account `samarpitateam@gmail.com`

To add another admin, add the email in both `src/lib/firebaseConfig.js` and `firestore.rules`.

## Instagram reels
Add reel links to `reels` in `src/data/site.js`; they appear in the "Seva in action" section on the home page.

## Deploy
Every push to `main` builds the site and publishes it to the `gh-pages` branch through GitHub Actions.
