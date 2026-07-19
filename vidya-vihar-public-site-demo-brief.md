# Vidya Vihar Inter College — Public Website Demo
## Build Brief for Google Antigravity

**Scope of this demo:** Public-facing website ONLY. No student/teacher/admin portals, no auth, no database, no backend. Static frontend with mock/local data, deployable to a preview URL for client sign-off.

---

## 0. How to Use This Document

Drop this file into the Antigravity workspace root (e.g. `docs/brief.md`) before your first prompt, or paste Sections 3, 4, 6, 7, and 8 directly into the agent as your initial instruction — those are the sections that translate directly into build tasks. Sections 1, 2, and 5 are context the agent should read but not act on literally (they explain *why*, and what NOT to fabricate).

If you're using `agents.md` / `skills.md` conventions, this doc can serve as the source for both: Section 6 (design system) maps to a `skills/design-system.md`, and Section 8 (task list) maps to your initial task breakdown.

---

## 1. Why This Scope

The client-facing goal right now is a **look-and-feel demo**, not a production build. The full School SMS doc (tech stack, RBAC, DPDP compliance, multi-tenancy, etc.) describes the eventual system — none of that is needed to show this client what their public site could look like. Building the full stack now would be wasted effort before the client has even approved a direction.

**Explicitly out of scope for this demo:**
- Student/Teacher/Admin login or portals
- Database, API, authentication, RBAC
- Payment gateway, SMS/email integration
- Real backend for the contact/enquiry form (mock submit is fine — show a success state, don't wire it to anything)
- CMS/admin interface for editing content (content is hardcoded/JSON for now)

---

## 2. Tech Stack (Demo-Scoped)

| Layer | Choice | Why |
|---|---|---|
| Framework | React + Vite + TypeScript | Matches the eventual production stack, so this code isn't throwaway |
| Styling | Tailwind CSS | Fast to build, matches production stack |
| i18n | react-i18next | Bilingual EN/HI toggle — this is a core requirement, not optional |
| Data | Local JSON files (`/src/data/*.json`) | No backend for a demo — structure the JSON so it can later be swapped for real API responses without changing components |
| Icons | lucide-react | Lightweight, consistent |
| Deployment | Vercel or Netlify (free tier) | One-click preview link to share with the client |
| Images | Placeholder/stock (see Section 5) | Real campus photos aren't available yet |

No Node/Express backend, no PostgreSQL, no S3 — all of that comes later if the client approves and the project moves to Phase 2.

---

## 3. Sitemap (Priority Order)

Build in this order. Everything through Priority 2 should exist before Priority 3 is touched — if time runs short, Priority 3 pages can be stubbed as "Coming Soon."

| Priority | Page | Core Content |
|---|---|---|
| 1 | **Home** | Hero (bilingual toggle visible here), quick stats, admission alert banner, latest notice preview |
| 1 | **About Us** | History (placeholder), Salarpur/Varanasi context, infrastructure description |
| 1 | **Admissions** | Eligibility, required documents, admission period, enquiry form (mock submit) |
| 1 | **Contact** | Address, map embed, directions, WhatsApp button |
| 2 | **Academics** | Classes 6–12, UP Board affiliation, three streams |
| 2 | **Gallery** | Placeholder/stock campus images organized by category |
| 3 | **Facilities** | Assembly ground, bicycle parking, classrooms — from visual observations |
| 3 | **News & Notices** | 2–3 sample notices (clearly marked as sample data) |
| Skip for demo | Faculty | No staff data exists at all — don't build this page yet |
| Skip for demo | Students/Alumni | No data exists — don't build this page yet |

---

## 4. Real Content — Ready to Use

This is verified/sourced data from the client's own documentation and public records. Use it as-is; don't paraphrase it into something less accurate.

### Institution
- **Name (English):** Vidya Vihar Inter College
- **Name (Hindi):** विद्या विहार इंटर कॉलेज
- **Type:** Intermediate College, UP Board affiliated, Private/Unaided
- **Board:** Uttar Pradesh Madhyamik Shiksha Parishad (UP Board)
- **Classes offered:** 6–8 (Middle School), 9–10 (High School), 11–12 (Intermediate)
- **Streams (standard for UP Inter Colleges):** Science (PCM/PCB), Arts, Commerce

### Address & Contact Shell
- 82XJ+6W6, Near Vidya Vihar Inter College, Salarpur, Varanasi, Uttar Pradesh 221112
- District: Varanasi | State: Uttar Pradesh | PIN: 221112
- STD Code: 0542 | Vehicle registration prefix: UP 65
- Google Maps Plus Code: `82XJ+6W6 Salarpur, Varanasi, Uttar Pradesh` — use this to embed the map on the Contact page

### Admissions (from 2019 gate signage — present as a typical cycle, not a hard date)
- Admissions typically open March–April
- Entry points: Classes 6, 9, and 11
- Required documents: Transfer Certificate, previous marksheet, Character Certificate, Caste Certificate (if applicable), Aadhaar Card, passport photos, Domicile Certificate

### About / Local Context (for the About page)
- Salarpur is a Census Town in Varanasi District, ~8–10 km from Varanasi city center
- Local literacy rate 73.97% — above the UP state average of 67.68%
- Well-connected via Varanasi–Sarnath Road; nearest rail is Varanasi Junction (Cantt), ~10 km, with Sarnath Station also nearby
- Nearby areas: Godowlia, Sarnath, Shivpur, Shankerpur
- Varanasi is a major India education hub (BHU, IIT-BHU, Sampurnanand Sanskrit University nearby) — useful as one line of context, not a headline claim

### Campus Description (for About/Facilities — from visual observation, safe to state as description, not as a promotional claim)
- Multi-building campus, 2–3 story buildings, light yellow/cream exteriors
- Large open courtyard used for morning assembly
- Trees including palm trees planted around campus
- Walled compound, metal main gate with Hindi signage
- Dedicated bicycle parking area (most students commute by bicycle)
- Solar street lighting on campus

---

## 5. Data Gaps — Use Placeholders, Don't Invent

None of the following exist in any source document. **Do not let the agent generate plausible-sounding values for these** — a demo with fabricated stats (fake student counts, invented principal name, made-up results) will embarrass the client if anyone checks it against reality. Use visible placeholder styling (e.g. a dashed border + "Sample Data — Confirm With School" label, or literal `[TBD]` text) so it's obvious this is a demo, not final content:

- Exact establishment/founding year
- Principal's name, message, and contact
- Phone number, email address, office hours
- UP Board affiliation/registration number, UDISE code
- Fee structure (any class)
- Number of teaching staff, number of enrolled students
- School timing
- Subject-level detail within each stream
- Board exam results / achievements
- Facility specifics (library size, lab equipment, sports facilities)
- School motto/vision/mission
- Management/Trust details
- Actual campus photographs (only Justdial listing photos exist, and those aren't ours to use — see below)

### On Images
Don't scrape or hotlink the Justdial listing photos — ownership is unclear and it's a live third-party business listing, not licensed content. For the demo:
- Use neutral, category-appropriate stock/placeholder images (school gate, courtyard, classroom, bicycle parking) sourced from a royalty-free library, OR
- Use solid-color placeholder blocks labeled "Photo: [Campus Gate]" etc.
- Add a comment in the gallery component making it obvious these swap out for real client photos before launch

---

## 6. Visual Design System

| Element | Spec |
|---|---|
| Primary color | Saffron/orange — e.g. `#F2994A` (warm, not neon) |
| Secondary | White / off-white `#FDFDFD`, neutral grays for text |
| Accent | Green — e.g. `#27AE60` |
| English typeface | Clean sans-serif (Inter, Poppins) |
| Hindi typeface | Noto Sans Devanagari — test it alongside the English face for consistent x-height and weight |
| Layout | Mobile-first. Most parents/teachers will view on Android phones over slower connections |
| Imagery | Compressed/WebP, lazy-loaded below the fold |
| Overall tone | Clean, institutional, trustworthy — not flashy |

**Non-negotiable UX features for this audience:**
- WhatsApp click-to-chat button (persistent, e.g. floating button) — highest-value low-effort feature for Indian parents
- Bilingual toggle visible on every page, not buried in a menu
- Fast initial load — this matters more here than animation polish

---

## 7. Bilingual (EN/HI) Setup

Use `react-i18next` with a locale JSON per language. Structure keys by page/section so translations stay maintainable:

```json
// src/locales/en/common.json
{
  "nav": {
    "home": "Home",
    "about": "About Us",
    "academics": "Academics",
    "admissions": "Admissions",
    "gallery": "Gallery",
    "contact": "Contact"
  }
}
```

```json
// src/locales/hi/common.json
{
  "nav": {
    "home": "मुख्य पृष्ठ",
    "about": "हमारे बारे में",
    "academics": "शैक्षणिक",
    "admissions": "प्रवेश",
    "gallery": "गैलरी",
    "contact": "संपर्क करें"
  }
}
```

Body content (About page paragraphs, admission info, etc.) should live in these same locale files, not hardcoded in components — that's what makes the toggle actually work across the whole site, not just the nav.

---

## 8. Build Task List

Paste this section directly as your initial task breakdown in Antigravity:

1. Scaffold Vite + React + TypeScript + Tailwind project
2. Set up react-i18next with `en`/`common.json` and `hi`/`common.json`, wire a toggle in the header
3. Build shared layout: header (nav + language toggle + WhatsApp button), footer (address, quick links)
4. Build Home page: hero, quick stats block, admission alert banner, notice preview card
5. Build About page using Section 4 content (institution, local context, campus description)
6. Build Academics page: classes 6–12, UP Board affiliation, three streams
7. Build Admissions page: eligibility, document checklist, admission period, mock enquiry form with success state
8. Build Contact page: address, embedded map via Plus Code, WhatsApp button, directions
9. Build Gallery page with placeholder images, categorized (gate, courtyard, classrooms, bicycle parking)
10. Build Facilities page from campus description
11. Build News & Notices page with 2–3 sample notices, clearly labeled as sample data
12. Add visible "Sample Data" styling wherever Section 5 placeholders are used
13. Responsive pass — test at 360px width (common low-end Android) through desktop
14. Deploy to Vercel/Netlify preview URL

---

## 9. Definition of Done for This Demo

- All Priority 1 and 2 pages built and navigable
- EN/HI toggle works site-wide, not just on nav labels
- Every placeholder/unconfirmed data point is visibly marked as sample data
- No fabricated statistics, names, or results anywhere
- Loads reasonably fast on a throttled mobile connection
- Deployed to a shareable preview link

---

## 10. After the Demo

If the client approves the look and feel, the next real decisions (from the full School SMS doc) are:
- Whether there's a Parent portal or parents use student logins
- Data privacy/DPDP Act compliance approach (this system will hold Aadhaar numbers and minors' data)
- Who owns the code/data once built — get this in writing before real development starts
- Whether offline-first attendance marking is needed (connectivity in this area is patchy)

None of that blocks this demo — it's listed here so it doesn't get lost.
