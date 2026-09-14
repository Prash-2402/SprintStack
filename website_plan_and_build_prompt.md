# Website Plan — SIH Problem Statement Portal

## Goal
A portal that mirrors the look of the official SIH portal, displaying all 40 problem statements
in the official schema (Background / Description / Expected Solution / Organization / Department /
Category / Theme), while layering on the booklet's extra value: a 5-hour agentic build plan,
inputs/outputs, deliverables, and guardrails per statement.

## Pages

**1. Landing**
- Hero section, stats strip ("40 problem statements · 8+ themes · 5-hour build window")
- CTA into Browse page
- Judging-rubric teaser (100-point breakdown, linking to full Rubric page)

**2. Browse**
- Filterable grid/list: filter by Theme, Category, Difficulty tier
- Search bar (matches ID, title, org, theme)
- Each card: ID, Title, Theme badge, Organization

**3. Problem Statement Detail**
- Top block matches the official schema exactly: ID, Title, Background, Description,
  Expected Solution, Organization, Department, Category, Theme
- Below it, a tabbed/accordion section for the booklet's added value:
  - 5-Hour Agentic Build Plan
  - Inputs / Outputs
  - Deliverables
  - Guardrails

**4. Rubric & Rules**
- 100-point judging table
- Agentic-coding ground rules (do / don't reward)
- Demo format and submission baseline
- Static page

**5. Team / Submission (optional)**
- Simple form for teams to register or lock in their chosen problem statement

## Suggested Stack
- **Frontend:** Next.js + Tailwind CSS
- **Backend/data:** Supabase, with a `problem_statements` table so Browse and Detail pages
  just query data — adding PS41+ later becomes a data insert, not a code change
- **Optional:** Supabase Auth if team registration is needed

## Suggested Data Model (`problem_statements` table)
| Column | Type | Notes |
|---|---|---|
| id | text (PK) | e.g. "PS01" |
| title | text | |
| organization | text | |
| department | text | |
| category | text | Software / Hardware+Software |
| theme | text | |
| difficulty | text | Foundational / Applied |
| background | text | |
| description | text (markdown) | lettered a–d bullets |
| expected_solution | text (markdown) | bullet list |
| build_plan | text | the 5-hour agentic plan |
| inputs | text | |
| outputs | text | |
| deliverables | text | |
| guardrails | text | |

---

# Agentic Coding Build Prompt

Paste the block below into Claude Code, Cursor, or another agentic coding tool to scaffold the site.

```
Build a Next.js 14 (App Router) + Tailwind CSS + Supabase web app called
"SIH Problem Statement Portal."

DATA
- Create a Supabase table `problem_statements` with columns:
  id (text, PK), title (text), organization (text), department (text),
  category (text), theme (text), difficulty (text), background (text),
  description (text), expected_solution (text), build_plan (text),
  inputs (text), outputs (text), deliverables (text), guardrails (text).
- Write a seed script that inserts the 40 problem statements from the
  attached "sih_problem_statements_official_format.md" file into this table.
  Parse each PS block's Background / Description / Expected Solution /
  Organization / Department / Category / Theme into the matching columns.
  Leave build_plan/inputs/outputs/deliverables/guardrails blank for now —
  I will backfill them from a separate source.

PAGES
1. Landing page ("/"): hero section, a stats strip showing counts pulled
   live from the table (total problem statements, distinct themes), and a
   CTA button linking to /browse. Include a short rubric teaser section
   linking to /rubric.
2. Browse page ("/browse"): grid of cards (ID, title, theme badge,
   organization) pulled from Supabase. Add client-side filters for Theme,
   Category, and Difficulty, plus a search bar matching id/title/org/theme.
3. Detail page ("/problem/[id]"): render the official schema fields
   (Background, Description, Expected Solution, Organization, Department,
   Category, Theme) in a card at the top exactly as stored. Below it, add a
   tabbed section with 4 tabs: "5-Hour Build Plan", "Inputs/Outputs",
   "Deliverables", "Guardrails" — each rendering the corresponding column,
   with a friendly empty-state if that field isn't filled in yet.
4. Rubric page ("/rubric"): a static page rendering the 100-point judging
   table, agentic-coding ground rules (do / don't-reward table), and the
   demo format, as plain content (no DB needed) — I will supply the text.

STYLE
- Clean, official-portal look: neutral background, one accent color,
  card-based layout, badges for Theme/Category/Difficulty.
- Fully responsive; cards should look good on mobile.

DELIVERABLE
- Working Next.js project with the Supabase client wired up via
  environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY).
- A README explaining how to run the seed script and start the dev server.
- Keep components small and typed (TypeScript) so adding a 5th page later
  (e.g. team registration) is straightforward.
```

**Tip:** attach `sih_problem_statements_official_format.md` alongside this prompt so the
agent can parse and seed all 40 statements in one pass instead of you retyping them.
