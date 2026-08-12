# Akiraas — Next.js Website

Built with Next.js 16 (App Router) + TypeScript. All styling via plain CSS custom properties — no Tailwind dependency.

## Pages
| Route | Page |
|---|---|
| `/` | Homepage |
| `/about` | About Us |
| `/events` | Events & Communities |
| `/consulting` | Martech Consulting |
| `/products` | Fingoh.ai |
| `/contact` | Contact |

## Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel via GitHub

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Akiraas website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/akiraas-website.git
git push -u origin main
```

### 2. Connect Vercel
1. [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done in ~60 seconds

### 3. Add akiraas.com domain
1. Vercel project → **Settings → Domains**
2. Add `akiraas.com` and `www.akiraas.com`
3. Update DNS at your registrar:
   - `A` record: `76.76.21.21`
   - `CNAME www`: `cname.vercel-dns.com`

## Project Structure
```
src/
  app/
    layout.tsx       ← Nav + Footer wrapper
    page.tsx         ← /
    about/page.tsx   ← /about
    events/page.tsx  ← /events
    consulting/page.tsx
    products/page.tsx
    contact/page.tsx
  components/
    Nav.tsx          ← mobile-aware, scroll-aware
    Footer.tsx
  styles/
    globals.css      ← all design tokens
public/
  Fingoh_Black.png
```
