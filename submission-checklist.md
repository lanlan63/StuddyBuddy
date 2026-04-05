# StudyBuddy — Sprint 3 Submission Checklist

> **Module:** CMP-N204-0 Software Engineering (Level 5)  
> **Sprint:** 3 — Initial Development (Week 10 Review)  
> **Submission:** Single PDF document via Moodle  

---

## How to Use

- `[x]` = Done and evidenced  
- `[~]` = Partially done — needs work  
- `[ ]` = Not started / missing  

---

## Part A — Working Application (Demo in Code Review)

> All pages must use **data pulled from the MySQL database**, running in **Docker containers**.

| # | Required Page | Status | Developer | PUG File |
|---|---------------|--------|-----------|----------|
| 1 | **Users list page** | [x] | All members | `users.pug` (Ali, Lan, Maywon, Nilay, Tavishi) |
| 2 | **User profile page** | [x] | All members | `profile.pug` (Ali, Lan, Maywon, Nilay, Tavishi) |
| 3 | **Listing page** (study sessions) | [x] | All members | `sessions.pug` (Ali, Lan, Maywon, Nilay, Tavishi) |
| 4 | **Detail page** (session detail) | [x] | All members | `session-detail.pug` (Ali, Lan, Maywon, Nilay, Tavishi) |
| 5 | **Tags / categories page** | [x] | All members | `tags.pug` (Ali, Lan, Maywon, Nilay, Tavishi) |

### Infrastructure Checklist

- [x] Docker environment runs (`docker-compose.yml` with web, db, phpmyadmin)
- [x] Database schema loaded (`sd2-db.sql`)
- [x] Seed data populates database (`seed-data.sql`)
- [x] All 5 members have individual code in `members/<Name>/app/`
- [x] Each member's folder has: `app.js`, `views/`, `services/`

---

## Part B — Sprint 3 PDF Document

This is the PDF you upload to Moodle. Each section below maps to a requirement from the assessment brief.

### 1. User Stories Implemented in Sprint 3

| Criteria | Status | Notes |
|----------|--------|-------|
| User stories listed | [x] | Can be copied from Sprint 2 documentation (`User Stories Sprint 2.docx` / `Sprint 3 user stories.docx`) |
| Stories marked as implemented | [ ] | Mark which stories were completed in Sprint 3 |
| Covers all 5 required pages | [ ] | Users list, profile, sessions listing, session detail, tags |

### 2. Database Design

| Criteria | Status | Notes |
|----------|--------|-------|
| ERD diagram included | [x] | `design/diagrams/edr_diagram.md` (Mermaid) — **export as image for PDF** |
| Schema explained | [x] | `sd2-db.sql` defines all tables |
| Tables cover required pages | [x] | `user`, `study_session`, `session_participant`, `skill`, etc. |

### 3. Task Breakdown & Developer Allocation

| Criteria | Status | Notes |
|----------|--------|-------|
| Tasks listed with assigned developers | [ ] | **Export from GitHub Projects / Kanban board** |
| Shows who built which page | [ ] | Map each of the 5 pages to developer(s) |
| Shows Sprint 3 specific tasks | [ ] | Separate from Sprint 1/2 tasks |

### 4. GitHub Links

| Criteria | Status | Notes |
|----------|--------|-------|
| GitHub repository URL included | [ ] | **Add your repo URL** |
| GitHub Project (Kanban) URL included | [ ] | **Add your projects board URL** |

### 5. GitHub Metrics Screenshot

| Criteria | Status | Notes |
|----------|--------|-------|
| Screenshot showing all 5 members contributing | [ ] | **Go to GitHub → Insights → Contributors → screenshot** |
| Shows commits from: Ali, Lan, Nilay, Maywon, Tavishi | [ ] | All members must have visible contributions |

### 6. Kanban Board Screenshot

| Criteria | Status | Notes |
|----------|--------|-------|
| Current Kanban board screenshotted | [ ] | **Go to GitHub Projects → screenshot the board** |
| Shows Sprint 3 tasks (To Do, In Progress, Done) | [ ] | Tasks should be in "Done" column |

### 7. Meeting Records

| Criteria | Status | Notes |
|----------|--------|-------|
| Sprint 3 meetings included | [x] | M7 (27/02/2026) covers Sprint 3 planning |
| Earlier meetings included for context | [x] | M1–M7 all available in `meetings/` |
| Meetings show date, attendees, actions | [x] | All follow consistent template |

---

## Meeting Records Available

| Meeting | Date | Goal | Facilitator | Attendees |
|---------|------|------|-------------|-----------|
| M1 | 23/01/2026 | Agree code of conduct, group name, project | Lan | Ali, Nilay, Lan, Maywon |
| M2 | 30/01/2026 | Sprint 1 discussion, choose project | Lan | Ali, Nilay, Lan, Maywon, Tavishi |
| M3 | 06/02/2026 | Finish Sprint 1 | Lan | Ali, Nilay, Lan, Maywon, Tavishi |
| M4 | 09/02/2026 | Finalise Sprint 1 submission | Lan | Ali, Nilay, Lan, Maywon |
| M5 | 17/02/2026 | Assign Sprint 2 tasks | Lan | Ali, Nilay, Lan, Maywon, Tavishi |
| M6 | 20/02/2026 | Review Sprint 2 tasks | Lan | Ali, Nilay, Lan, Maywon |
| M7 | 27/02/2026 | Plan tasks for Sprint 3 | Lan | Ali, Nilay, Lan, Maywon, Tavishi |

> ⚠️ **You may need additional Sprint 3 meetings (M8, M9, etc.) to show ongoing progress during Weeks 7–10.**

---

## Action Items Before Submission

### 🔴 Critical (must have in PDF)

1. **Screenshot GitHub contributions graph** → Insights → Contributors
2. **Screenshot Kanban board** → GitHub Projects
3. **Export ERD as image** → Render the Mermaid diagram and screenshot
4. **Add GitHub repo + project URLs** to the PDF
5. **List task breakdown** with developer names for Sprint 3 pages

### 🟡 Recommended

6. **Add more Sprint 3 meeting records** (M8+) if you had meetings during Weeks 7–10
7. **Include application screenshots** of each of the 5 pages running in browser
8. **Mark user stories as implemented** with checkmarks or status column

---

## PDF Structure Suggestion

```
1. Cover Page (group name, members, student IDs, module info)
2. User Stories Implemented in Sprint 3
3. Database Design (ERD diagram + table descriptions)
4. Task Breakdown & Developer Allocation
5. GitHub Repository & Project Links
6. GitHub Metrics Screenshot
7. Kanban Board Screenshot
8. Meeting Records
9. AI Declaration (if applicable)
```
