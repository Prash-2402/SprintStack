# SIH Problem Statement Portal (100% Static & High Concurrency)

An official-style portal for **Smart India Hackathon** problem statements (PS01–PS40), formatted strictly to the official schema (**Background / Description / Expected Solution / Organization / Department / Category / Theme**), layered with **5-Hour Agentic Build Plans**, inputs/outputs, deliverables, guardrails, a **100-Point Judging Rubric**, and direct **Google Forms submission integration**.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript** as a **100% Static Pre-rendered Website** — engineered to easily withstand hundreds of simultaneous concurrent participants with zero server database bottlenecks.

---

## Key Highlights

- **100% Static & Blazing Fast**: Zero database lookups or external server bottlenecks during browsing. Easily handles hundreds/thousands of concurrent visitors.
- **Official SIH Schema**: Displays all 40 problem statements from central ministries with complete official metadata.
- **5-Hour Agentic Roadmaps**: Interactive tabbed section on each problem detail page for:
  - 5-Hour Build Milestones (Hour 1 to Hour 5)
  - Inputs & Outputs Data Contracts
  - Official Deliverables Checklist
  - Sprint Guardrails & Scope Boundaries
- **Instant Search & Multi-Filters**: Instant client-side search across ID, title, ministry, and theme, plus filters for Theme, Software/Hardware category, and difficulty tier.
- **Google Form Team Lock-in**: Direct Google Forms submission integration at the bottom of the landing page, browse directory, problem detail pages, and top navigation bar.
- **100-Point Judging Rubric**: Full breakdown table, agentic-coding "Do vs. Don't Reward" ground rules, and 5-minute video submission standards.

---

## Configuring the Google Form Link

To set your official Google Form link for team submissions:
1. Open [`lib/constants.ts`](./lib/constants.ts).
2. Change `GOOGLE_FORM_SUBMISSION_URL` to your Google Form link:
   ```ts
   export const GOOGLE_FORM_SUBMISSION_URL = 'https://forms.gle/your-actual-form-id';
   ```
This updates the submission links across the whole site simultaneously.

---

## Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. All 40 problem statements and pages are ready immediately.

### 3. Production Build / Static Export
```bash
npm run build
```
Creates an ultra-optimized static production build with all 40 problem statements pre-rendered.

---

## Project Structure

```
Hackathon/
├── app/
│   ├── layout.tsx                # Root layout with SIH tricolor header & footer
│   ├── page.tsx                  # Landing page (hero, live stats, rubric teaser, submission)
│   ├── browse/
│   │   └── page.tsx              # Browse catalog with instant search & filters
│   ├── problem/[id]/
│   │   └── page.tsx              # Detail page with official schema + 4 tabs + lock-in form
│   ├── rubric/
│   │   └── page.tsx              # 100-point judging rubric & agentic ground rules
│   └── globals.css               # Tailwind CSS & global styling
├── components/
│   ├── Navbar.tsx                # Official SIH navigation & Google Form CTA
│   ├── Footer.tsx                # Portal footer & ministry attribution
│   ├── SubmissionCard.tsx        # High-concurrency Google Form submission card
│   ├── ProblemCard.tsx           # Problem statement card for grid
│   ├── FilterBar.tsx             # Search bar + theme/category/difficulty filters
│   ├── BrowseClient.tsx          # Client-side filtering & state management
│   ├── TabsSection.tsx           # 4-tab interactive roadmap with friendly empty state
│   └── StatusBadge.tsx           # Reusable badge tokens
├── lib/
│   ├── constants.ts              # Google Form submission URL & portal settings
│   ├── types.ts                  # TypeScript interfaces
│   ├── data.ts                   # 100% static data access
│   └── problem_statements_data.json # 40 parsed problem statements
├── scripts/
│   └── parse_statements.js       # Extracts PS01-PS40 from markdown to JSON
├── sih_problem_statements_official_format.md # Source markdown
└── package.json
```
