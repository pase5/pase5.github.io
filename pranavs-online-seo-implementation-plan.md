# pranavs.online — SEO Implementation Plan

**Site**: pranavs.online (single-page HTML portfolio)
**Baseline Score**: ~52/100
**Goal**: Fix critical content/structure issues, then build long-term ranking authority

---

## Phase 1 — Stop the Bleeding (This Week)

### 1.1 Remove placeholder dev text
- [ ] Find and delete: *"yah i will do when I'm free bro"*
- [ ] Find and delete: *"what are you looking at its blank...."*
- [ ] Find and delete: *"need time bro"*
- [ ] Replace each with real project copy (see Phase 3 case study content — can reuse there)

### 1.2 robots.txt + sitemap.xml
- [ ] Confirm whether `pranavs.online/robots.txt` exists — if not, create it:
  ```
  User-agent: *
  Allow: /

  Sitemap: https://pranavs.online/sitemap.xml
  ```
- [ ] Generate `sitemap.xml` listing the homepage (and future project pages from Phase 2)
- [ ] Submit sitemap in Google Search Console (verification tag already present on-site)

### 1.3 Image cleanup
- [ ] Rename `IMG_3449.png`, `IMG_3449 (1).png` → descriptive, hyphenated names
      e.g. `pranav-s-uiux-designer-portrait.webp`
- [ ] Add descriptive `alt` text to every `<img>` tag (not "image1" — describe what's shown)
- [ ] Convert PNGs to WebP/AVIF where possible
- [ ] Add explicit `width`/`height` attributes to prevent layout shift

### 1.4 Heading hierarchy
- [ ] Audit the page for heading tags — should be exactly **one** `<h1>`
      (likely: "Pranav S – UI/UX Designer & AI Data Science Enthusiast")
- [ ] Convert section titles ("Selected Work," "My Capabilities," "Journey," etc.) to `<h2>`
- [ ] Nest any sub-sections as `<h3>` — no skipped levels

---

## Phase 2 — Structure for Ranking (Next 2–4 Weeks)

### 2.1 Structured data (JSON-LD)
- [ ] Add `Person` schema to the homepage `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pranav S",
    "url": "https://pranavs.online",
    "jobTitle": "UI/UX Designer & AI/Data Science Enthusiast",
    "image": "https://pranavs.online/IMG_3449.png",
    "sameAs": [
      "https://github.com/pase5",
      "https://www.linkedin.com/in/pranavs5/",
      "https://www.instagram.com/__pr.an.av_/"
    ]
  }
  ```
- [ ] Add `WebSite` schema for the site itself
- [ ] Add `CreativeWork` schema per project once project pages exist (Phase 2.2)

### 2.2 Split flagship projects into their own pages
Move these off scroll-anchors and onto dedicated routes, each with its own `<h1>`, title tag, and meta description:
- [ ] `/work/iris` — IRIS event branding
- [ ] `/work/house-of-amoraa` — House of Amoraa UI/UX
- [ ] `/work/signal-4-0` — SIGNAL 4.0 platform
- [ ] `/work/ananthus-pcm` — Ananthu's PCM branding
- [ ] `/work/weltech-assurance` — Weltech/Assurance identity

### 2.3 Performance
- [ ] Replace or lazy-load the large stock video embed (Elephants Dream sample) — heavy, off-brand, hurts LCP
- [ ] Re-test Core Web Vitals after image + video fixes

---

## Phase 3 — Build Authority (Ongoing)

### 3.1 Case study content
Write 2–3 full case studies — double as the new project pages from 2.2:
- [ ] "Redesigning the IEEE SPS Kerala Chapter Website"
- [ ] "IRIS — Branding a Signal Processing Tech Event"
- [ ] "House of Amoraa — UI/UX for a Luxury Bespoke Atelier"

### 3.2 Backlinks
- [ ] Get the IEEE SPS Kerala Chapter site to link back to pranavs.online
- [ ] Add portfolio link to GitHub profile README
- [ ] Add portfolio link to LinkedIn Featured section
- [ ] Mirror key projects on Behance and/or Dribbble, linking back
- [ ] Check for a college design showcase or IEEE contributor page to get listed on

### 3.3 Ongoing hygiene
- [ ] Keep meta descriptions and OG tags consistent as new pages are added
- [ ] Re-audit heading structure and alt text whenever new projects are added
- [ ] Recheck Search Console monthly for crawl errors / indexation issues

---

## Priority Order Summary

| Priority | Task | Effort | Impact |
|---|---|---|---|
| 1 | Remove placeholder text | Low | High |
| 2 | robots.txt + sitemap.xml | Low | High |
| 3 | Person + WebSite JSON-LD | Low | High |
| 4 | Split projects into own pages | Medium | High |
| 5 | Image renaming + alt text | Low | Medium |
| 6 | Heading hierarchy fix | Low | Medium |
| 7 | Case study content | High | High (compounding) |
| 8 | Backlinks | Medium | High (compounding) |
| 9 | Video/performance fix | Medium | Medium |
