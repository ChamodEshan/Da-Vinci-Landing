# Da Vinci Ceramics — Mosaic Collection Landing Page

A responsive Next.js App Router + TypeScript + Tailwind CSS project for the Da Vinci Ceramics practical assessment.

## Before you start
Install Node.js LTS (20.9 or newer recommended) and Git. Check with:
```bash
node -v
npm -v
git --version
```

## Run locally
1. Extract this ZIP.
2. Open the extracted `da-vinci-mosaic-nextjs` folder in VS Code.
3. In VS Code choose Terminal → New Terminal.
4. Run:
```bash
npm install
npm run dev
```
5. Open http://localhost:3000

To verify the production build:
```bash
npm run build
npm run start
```

## Important setup before publishing
The WhatsApp CTA is intentionally not connected to an invented phone number.

1. Create `.env.local` in the project root.
2. Add:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=94XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```
3. Replace `94XXXXXXXXX` with the official business WhatsApp number using digits only. Sri Lanka country code is 94; remove the leading 0 from a local number. Do not include `+`, spaces or hyphens.
4. Replace `https://your-vercel-domain.vercel.app` with the actual deployed URL after Vercel provides it.
5. Restart `npm run dev` after changing environment variables.

If you do not yet have the official number, leave it unset; the CTA falls back to the company website rather than inventing a number.

## Replace demo imagery
The remote Unsplash photos are interior-design inspiration only, not verified photographs of Da Vinci Ceramics' actual products. Before presenting/publishing:
- Replace them with approved Mosaic Collection images.
- Put optimized images in `public/images/`.
- Update the `image` values in `app/page.tsx` and the CSS `background-image` URLs in `app/globals.css`.
- Use accurate alt text describing the actual image/product, not keyword stuffing.
- Confirm rights/licensing and actual product specifications with the company.

## SEO and GEO included
- Next.js Metadata API: title, meta description, canonical, Open Graph, Twitter cards.
- Semantic heading structure and accessible navigation.
- Descriptive image alt text.
- `app/robots.ts` → `/robots.txt`.
- `app/sitemap.ts` → `/sitemap.xml`.
- Organization JSON-LD in `app/layout.tsx`.
- `public/llms.txt` orientation file for AI systems (experimental; not a ranking guarantee).
- Human-readable FAQs with real answers and clear contact information.

The `NEXT_PUBLIC_SITE_URL` must be updated to the canonical production URL before release. Search Console, Bing Webmaster Tools and schema validators are manual follow-up tasks.

## Deploy to Vercel (GitHub method)
1. Create/sign in to GitHub and create a new empty repository, e.g. `da-vinci-mosaic-landing`.
2. In the project terminal run:
```bash
git init
git add .
git commit -m "Build Da Vinci mosaic landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/da-vinci-mosaic-landing.git
git push -u origin main
```
3. Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, complete the browser authentication.
4. Sign in to Vercel at https://vercel.com and choose **Add New → Project**.
5. Import the GitHub repository.
6. Framework should be detected as Next.js. Keep the default build settings.
7. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = official number, digits only
   - `NEXT_PUBLIC_SITE_URL` = your Vercel production URL
8. Click Deploy. If you add or change environment variables later, redeploy.
9. Open the deployment URL on phone and desktop and test all buttons, images, navigation and WhatsApp.
10. Set `NEXT_PUBLIC_SITE_URL` to the final canonical URL and redeploy.

## After deployment: SEO checklist
- Open `/robots.txt`, `/sitemap.xml`, and `/llms.txt` on your domain.
- Verify page title and description in browser source.
- Test structured data with https://validator.schema.org/ (the current JSON-LD is Organization only).
- Register the site in Google Search Console and Bing Webmaster Tools, verify ownership and submit the sitemap.
- Test mobile layout and Core Web Vitals/PageSpeed Insights.
- Ensure the company name, address, phone and business details are approved and consistent everywhere.
- Do not add product prices, ratings, availability, dimensions or technical claims to structured data until verified and visible on the page.

## Assessment notes
The assessment PDF asks for a target keyword, secondary keywords, SEO title/description, URL, H1/H2 structure, image alt text, internal-link ideas and a Meta/Google campaign plan. Include those in your presentation; they are strategy deliverables rather than extra landing-page routes.
