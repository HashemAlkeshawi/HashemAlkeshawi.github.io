**Implementation Plan — build the personal site from `structure/` using `info_me.txt`**

Purpose
- Turn the extracted structure and the `info_me.txt` reference into a production-ready single-page personal site focused on: "Hashem is a programmer, technical founder, and product builder." The site will present English first with Modern Standard Arabic translations and a simple language toggle.

Scope
- Use existing `structure/*.md` files as the canonical section outlines.
- Use `info_me.txt` as the definitive source for copy, taglines, bios, CTAs, and product (Baseera) summary.
- Implement the page in `html_test.html` as the working prototype. When ready, we can migrate to `index.html` (preserve original as backup).

High-level goals
- First impression: technical (programmer) and founder. Recruiters/investors should immediately see your technical credibility.
- Clear primary CTA: `Contact Me` (mailto) and a secondary CTA linking to the Baseera section.
- Bilingual support: English (default) + Arabic (MSA) with RTL support and a simple toggle.
- Accessible, semantic, responsive, and easy to update as Baseera matures.

Mapping `structure/` → page sections (implementation notes)
- `head.md` → implement head metadata + Open Graph and basic SEO (title, meta description, og:image placeholder).
- `navigation.md` → build the header `<nav>` with a small CTA button (Contact) and the language toggle.
- `hero.md` → implement the hero as `html_test.html` already contains a hero; replace content with defaults from `info_me.txt` and Baseera short line. Include screenshot placeholder and contact CTA.
- `about.md` → convert to a concise founder story (use selected long bio), include education snapshot and resilience note (Gaza), avoid phrasing about "quitting" university — state you returned/completed.
- `skills.md` → present grouped skills with proficiency tags and short evidence lines (e.g., "Laravel — built production APIs").
- `education.md` → concise timeline with projects and outcomes; include degree and relevant years from `info_me.txt`.
- `portfolio.md` → Baseera as flagship entry (closed beta), show short product description, features, placeholder downloads, and a technical stack box; other projects below as secondary items.
- `contact.md` / `footer.md` → contact methods (email, WhatsApp, LinkedIn), simple contact form that opens WhatsApp or mailto; footer shows copyright and quick links.

Per-section implementation checklist
- HEAD
   - Add: `og:title`, `og:description`, `og:image`, `og:url` (use Baseera image placeholder or site logo).
   - Keep Google verification meta if present.

- NAVIGATION
   - Implement accessible nav with anchors to sections, and a visible `Contact Me` CTA/button.
   - Add language toggle (EN/AR) that switches visible copy and `dir` attribute.

- HERO
   - Use `info_me.txt` defaults: Tagline 1 and Short Bio A (English), and Arabic equivalents hidden by default.
   - Primary CTA: mailto to `hashemalkeshawi@gmail.com`.
   - Secondary CTA: anchor to `#product` (Baseera section).
   - Placeholder image: use existing images until Baseera assets are available.

- ABOUT
   - Short founder story (one paragraph), then bulleted highlights: degree, role, key tech responsibilities, resilience note (survived Gaza conflict — short and human).
   - Add small CTA to contact or download CV.

- SKILLS
   - Render skills from `info_me.txt` Group G with inline proficiency labels.
   - For each top skill include a short evidence line (one-liner project example).

- EDUCATION
   - Single row for B.Sc. with years and program (2019–2024).

- PORTFOLIO / PRODUCT (Baseera)
   - Show Baseera short description, closed‑beta status badge, 3 feature cards (from Group D), tech stack box, and a call-to-action to join beta / contact for partnership.
   - Placeholder screenshot(s) and a note: "Assets coming — contact for demo."

- CONTACT
   - Mailto link, WhatsApp link, LinkedIn, GitHub, and Telegram handle.
   - Optional short form that opens WhatsApp or mailto with prefilled subject.

- FOOTER
   - Copyright (update year dynamically), quick links, small note: "Site focuses on Hashem — founder of Baseera (closed beta)."

Internationalization (EN/AR)
- Implement dual content with `.en` and `.ar` spans (we added this to `html_test.html`) and a simple toggle that sets `lang` and `dir` on `<html>`.
- Use MSA translations from `info_me.txt`. Keep numbers as Western digits in both languages.

Assets & placeholders
- Keep all current assets under `resources/` — do not delete.
- If Baseera assets are missing, use existing screenshots as placeholders and label them "placeholder".

Accessibility & SEO
- Use semantic tags: `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<footer>`.
- Add `alt` text to all images, `aria-label` where applicable, and ensure color contrast for CTAs.
- Add Open Graph and Twitter card meta tags in head.

Development tasks (concrete steps)
1) Wire hero defaults (DONE): ensure the default tagline and bio from `info_me.txt` are in `html_test.html` and toggles work. (Completed)
2) Implement `#product` Baseera section in `html_test.html` using Group D content (closed beta, features, stack). (Next)
3) Implement `#about` and `#contact` sections with short bio and CTAs (after product).
4) Implement `#skills` and `#education` sections with structured data from `info_me.txt`.
5) Add Open Graph tags and finalize `head.md` mapping.
6) Verify assets (headshot, screenshots) and replace placeholders when provided.
7) Accessibility pass and responsive polish.
8) Move prototype (`html_test.html`) to `index.html` or keep as `index_test.html` and set up final deployment process.

Testing & verification
- Local test: run a simple http server and review on desktop and mobile.
   - Powershell: 
      cd "f:\for_web\HashemAlkeshawi site";
      python -m http.server 8000;
- Verify language toggle, CTAs (mailto/WhatsApp), and that assets load.

Timeline & estimates
- Phase A (hero + product placeholder): 30–60 minutes (hero implemented; product section next).
- Phase B (about + contact + skills): 1–2 hours.
- Phase C (portfolio details + polish + i18n review): 1–2 hours (depends on assets and copy updates).

Immediate next actions I will perform now
1. Implement the `#product` (Baseera) section in `html_test.html` using the one-sentence description, closed‑beta badge, the 3–5 core features, and the listed tech stack. Add a clear CTA: "Contact Me" / "Join closed beta" (mailto + note).
2. Place meaningful placeholders for images and a short note: "Assets will be added — contact for demo."

When I finish those, I will report back and proceed to `#about` and `#contact` unless you direct me otherwise.

If this plan looks good, I will start implementing the `#product` section now.

— End of implementation plan —