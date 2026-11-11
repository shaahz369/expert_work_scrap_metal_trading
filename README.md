# Expert Work Scrap Trading LLC SPC — Website

A standalone, modern corporate website for **Expert Work Scrap Trading LLC SPC**, built from
the client's supplied company profile PDF. Runs entirely independently — **no Odoo, no CMS,
no backend required** to view and use the site.

Stack: **React 19 + Vite + React Router**, plain CSS (custom properties / design tokens, no
Tailwind or UI kit) for full control over the premium industrial navy/red/white identity.

---

## 1. Project Structure

```
expert-work-scrap/
├── index.html                  # HTML shell, fonts, meta/SEO tags
├── vite.config.js
├── package.json
├── check-images.mjs            # Script that tests every image link (see section 5)
├── public/
│   ├── favicon.png
│   └── favicon-32.png
└── src/
    ├── main.jsx                 # React entry point
    ├── App.jsx                  # Router + page layout (Navbar/Footer wrap all pages)
    ├── index.css                 # Design system: colors, type, buttons, cards, grid
    ├── assets/
    │   ├── logo.png              # Logo extracted from the client's PDF
    │   └── images.js             # ⭐ ALL image URLs in one place (see section 5)
    ├── data/
    │   └── content.js            # ⭐ ALL website copy, sourced from the company profile PDF
    ├── components/
    │   ├── Navbar.jsx / .css     # Responsive nav with hamburger menu
    │   ├── Footer.jsx / .css
    │   ├── PageHero.jsx / .css   # Reusable navy hero banner for interior pages
    │   ├── Seo.jsx               # Sets page <title> and meta description per route
    │   └── ScrollToTop.jsx       # Scrolls to top on route change
    └── pages/
        ├── Home.jsx / .css
        ├── About.jsx / .css
        ├── Services.jsx / .css
        ├── Industries.jsx / .css
        ├── Strengths.jsx / .css
        ├── Contact.jsx / .css
        ├── PrivacyPolicy.jsx     ┐
        ├── TermsAndConditions.jsx│ share Legal.css (placeholder content, flagged in-page)
        ├── NotFound.jsx / .css   # 404 page
```

---

## 2. Run It Locally

Requirements: **Node.js 18+** and npm.

```bash
cd expert-work-scrap
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

Other commands:

```bash
npm run build          # Production build → dist/
npm run preview        # Preview the production build locally
npm run lint           # Lint the codebase (oxlint)
node check-images.mjs  # Test that every image link in images.js loads
```

---

## 3. Where To Change Things

| What | Where |
|---|---|
| **Logo** | `src/assets/logo.png` — replace the file (same name) and it updates in the navbar and footer automatically. It was extracted directly from the client's PDF; swap in a vector/high-res version if available. |
| **Images** | `src/assets/images.js` — every image used site-wide is declared once in this file. See section 5 below for full instructions. |
| **Colors** | `src/index.css`, top `:root { ... }` block — change `--navy`, `--red`, `--paper`, etc. and the whole site updates. |
| **Text / copy** | `src/data/content.js` — company info, services, industries, strengths, vision/mission, client list, contact details. |
| **Contact details** (phone/email/address) | `company` object at the top of `src/data/content.js`. |
| **Page-specific layout or wording not in content.js** | Directly in the relevant file under `src/pages/`. |
| **Fonts** | Loaded in `index.html` (`<link>` tags) — currently **Oswald** (headings) and **Source Sans 3** (body) from Google Fonts. Swap the `<link>` and the `--font-display` / `--font-body` variables in `index.css`. |

---

## 4. Contact Form — Frontend vs. Backend

The contact form (`src/pages/Contact.jsx`) is **fully built and functional on the frontend**:
it validates required fields (name, email format, subject, message), shows inline errors, and
displays a success message on submit.

**It does not currently send an email or hit a server** — no backend was set up in this
environment. To connect it, open `handleSubmit` in `Contact.jsx` and either:

- **Easiest:** use a form backend service like [Formspree](https://formspree.io) or
  [EmailJS](https://www.emailjs.com) — both offer a few lines of client-side code to send the
  form to an inbox with no server to host.
- **Custom backend:** replace the `console.log(...)` call with a `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` call to your own API endpoint.

---

## 5. Images

The company profile PDF did not include separate, high-resolution marketing photography (its
images are flattened into the profile's page designs), so the site uses **free stock
photography from Unsplash** that matches the real industry (scrap yards, excavators and metal
piles, metal recycling, shipping ports, factories, oil and gas sites). These are a professional
placeholder. Unsplash photos are free to use commercially under the
[Unsplash License](https://unsplash.com/license).

All images are loaded from links in **one file**: `src/assets/images.js`. Each image has a
key name (for example `hero`, `serviceSourcing`, `industryOilGas`). The pages read these keys,
so changing a link in this file changes the image everywhere it is used. No other file needs
to change.

### Change an image to another Unsplash photo

1. Open the photo page on [unsplash.com](https://unsplash.com).
2. Right-click the photo, choose **Copy image address**.
3. Copy only the part that looks like `https://images.unsplash.com/photo-XXXXXXXX`.
4. In `src/assets/images.js`, replace the old photo ID in the matching key. Keep the end of
   the link (`?auto=format&fit=crop&w=...&q=80`) so the image is sized and compressed.

### Test that all image links work

Run this in the project folder:

```bash
node check-images.mjs
```

It checks every link in `images.js`. Each line shows `OK` or `BROKEN`. If an image shows as
broken, replace that key with another photo.

### Swap in the company's own photos

1. Add your image files to `src/assets/images/` (create the folder if needed).
2. In `src/assets/images.js`, import the file at the top, e.g.:
   ```js
   import heroYard from "./images/hero-yard.jpg";
   ```
3. Replace the matching link with your imported variable, e.g.:
   ```js
   hero: heroYard,   // was: "https://images.unsplash.com/..."
   ```

---

## 6. Deployment

This is a static site after `npm run build` (output in `dist/`). Any static host works:

- **Netlify / Vercel:** connect the repo, build command `npm run build`, publish directory
  `dist`. This project is deployed on Vercel: every pull request gets a preview link, and
  merging to `main` updates the live site.
- **Any static server / cPanel / S3 / Cloudflare Pages:** run `npm run build` locally, then
  upload the contents of `dist/` to your web root.

Because this is a client-side–routed single-page app, make sure your host redirects unknown
paths (e.g. `/about`, `/contact`) to `index.html`. Netlify/Vercel do this automatically; for
Apache/Nginx add a fallback rewrite rule to `index.html`.

---

## 7. Information From the PDF That Required a Placeholder

Everything else on the site (company description, services, industries, strengths, vision,
mission, quality & compliance statement, group companies, client list, phone, email, and
address) came directly from the supplied company profile PDF. The following were **not**
present in the PDF and use clearly-marked placeholders instead of invented facts:

- **Service, industry, and strength descriptions** — the PDF listed these as short labels only
  (e.g. "Scrap Metal Trading", "Established Heritage"). One short, purely descriptive sentence
  was written for each, based only on what's already stated elsewhere in the PDF — no new
  claims, certifications, or statistics were added.
- **Business hours** — not stated in the PDF, so none are shown on the Contact page.
- **Social media links** — none were provided, so the footer does not include any.
- **Privacy Policy / Terms & Conditions** — not included in the PDF; the pages exist (linked
  from the footer, as requested) with clearly labeled placeholder legal text for the client's
  legal team to replace.
- **Client logos** — the PDF's "Our Clients" page uses stock building photography with client
  names overlaid, not the clients' actual trademarked logos. To avoid implying an unauthorized
  use of trademarks, the site lists the same client **names as text** ("Trusted by
  organizations including…") on the Home page rather than reproducing those images.

No statistics, testimonials, certifications, or claims beyond what's in the PDF were invented.