# Rulebreakers Playbook

A minimalist, typographic Eleventy (11ty) site — the living manual of RBES.

## Quick Start

1) Install Node (18+). Then in a terminal:

```bash
npm install -g @11ty/eleventy
```

2) Build locally & preview:

```bash
npm run dev
# open http://localhost:8080
```

3) Build static files to **/docs** (for GitHub Pages):

```bash
npm run build
```

4) Push to GitHub (new repo, e.g., `rbes-playbook`) and enable **Settings → Pages**:
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/docs`

5) Custom domain:
   - In repo **Settings → Pages**, set your domain (e.g., `rulebreakersplaybook.com`).
   - Create DNS records at your registrar:
     - `A` records (apex) → GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - `CNAME` for `www` → `<yourusername>.github.io`
   - GitHub will create a `CNAME` file automatically once you set the domain.

---

## Structure

```
src/
  _includes/
    base.njk          # base layout
    header.njk        # site header
    footer.njk        # footer
  assets/
    style.css         # minimal Vignelli-inspired CSS
  index.md            # 0. Introduction + TOC
  background.md       # 1. Background, who we are
  workshops.md        # 2. Popup workshops we’re doing now
  year-test.md        # 3. Year Long Test of Concept / MVP
  theory.md           # 4. Theory
  revenue.md          # 5. Revenue Model
  budget.md           # 6. Budget
  metrics.md          # 7. Metrics and Outcomes
  context.md          # 8. Intellectual Context
  ownership.md        # 9. Shared Ownership Program / Fafa
```

Edit the `.md` files in `src/` — they are pure Markdown with front matter.
