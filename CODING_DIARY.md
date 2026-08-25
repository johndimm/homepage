# Coding Diary

## 2026-08-23 / 2026-08-24 — Homepage hub + connected apps

A two-day session that turned the homepage from a static list of projects into a
dark, card-based hub, cross-linked with every app, and cleaned up the portfolio
along the way.

### 1. Pruned dead projects
Removed five projects that no longer work — they depended on a now-suspended
Google Compute Engine backend and gone doteasy (`johndimm.com`) files:

- What Looks Good
- Talkshow Story Illustrator
- breakdown for empower
- Long Tail and Collaborations
- Headliners and Sidemen

### 2. Added newer projects
Found each in a sibling directory, pulled details from its repo, verified the
live URL, and sourced a card image:

- **Soundings** — `soundings-music.vercel.app` — music discovery that learns your taste.
- **Trailer Vision** — `trailer-vision-movies.vercel.app` — TikTok-style, trailer-first movie/TV discovery. *(Initial URL was wrong; corrected.)*
- **Speak, Memory** — `speak-memory.vercel.app` — spoken journal → a zoomable life calendar.
- **Orbit** — `orbit-eight-mauve.vercel.app` (repo: `Careers`) — explore connections between people and companies.

### 3. Dependency patch
`npm audit` showed 4 high-severity advisories, all rooted in Next.js.
`npm audit fix` bumped **Next.js 16.0.10 → 16.3.2** (plus `nanoid`, `postcss`,
`sharp`) → **0 vulnerabilities**. Build verified.

### 4. Homepage redesign
Switched to a dark ("black") theme inspired by the Soundings landing:

- Responsive card grid; each card shows a screenshot, title, a fuller blurb, and
  `year · stack`, with a GitHub link.
- **Clicking a card opens the app directly** (the richer card replaced the old
  per-project detail pages).
- Soundings goes straight to its no-login **YouTube** entry (Spotify lives inside
  the app, gated by its paid + 5-person beta).
- Per-card accent colors; hover lift + image zoom.
- Fixed the Résumés word cloud (light tile, scaled up) and its broken `/resumes`
  image (was pointing at the dead `johndimm.com`).

### 5. Better card imagery
- **Orbit** — captured the recognizable `?graph=orbit-musk-altman` graph
  (Musk's companies + the OpenAI circle around Sam Altman), cropped to 16:9.
- **filterpanel** — screenshotted the live demo (filter panel + movie-poster grid).

### 6. Copyright footers
Added `© 2026 John Dimm` to the bottom of every app (and updated the homepage
from 2025 → 2026).

### 7. Phase 2 — connect every app back to the homepage
Each app now has a **home icon → `johndimm.vercel.app`** and a **standard About
page** sharing one consistent dark look (description, Built-with, and
Open / GitHub / ← All apps). Adapted per stack:

| App | Home icon | About | Notes |
|---|---|---|---|
| Orbit | header icon | `/about` | template that set the pattern |
| Trailer Vision | repointed existing home link | `/about` + nav link | via `VITE_HUB_URL` |
| Soundings | fixed control | `/about` | |
| Romeo & Juliet | fixed icon | kept its own About overlay | on a WIP `capacitor` branch |
| Silver Age | fixed control | `/about` | |
| filterpanel | fixed control | `/about` | |
| Constellations | repointed built-in house control | `/about.html` | via `VITE_HUB_URL` |
| Connections Scratchpad | fixed control | `/about.html` | |
| Speak, Memory | fixed control | `/about.html` | |

### 8. Shipped
Committed and pushed every repo (homepage, Orbit, Trailer Vision, Soundings,
Constellations, Connections, Speak Memory, Silver Age on `develop`, filterpanel
on `master`). Romeo was committed locally only — it sits on a `capacitor` WIP
branch, left for a manual merge.

### Follow-ups noted
- Update/remove `VITE_HUB_URL` in the Trailer Vision and Constellations Vercel
  projects so the home link points at the homepage.
- Confirm `develop` (Silver Age) and `master` (filterpanel) are their production
  branches on Vercel.
- Watch the filterpanel-csv Vercel build (a fresh-clone dependency quirk blocked
  the local build only).
- Eyeball the fixed home/About controls for overlap with each app's own UI.
- Possible future polish: hover-animated card screenshots (deferred).
