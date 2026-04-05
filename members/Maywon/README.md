# Maywon – Sprint 3 Contribution

## Overview
This folder contains Maywon's Sprint 3 implementation for the StudyBuddy application.

## Pages Implemented
| Page | Route | Description |
|------|-------|-------------|
| Users List | `GET /users` | Directory of all study buddies |
| User Profile | `GET /users/:id` | Full student profile page |
| Sessions Listing | `GET /sessions` | All study sessions listing |
| Session Detail | `GET /sessions/:id` | Session detail with participants |
| Tags / Categories | `GET /tags` | Browse by topic |

## Technologies Used
- Node.js + Express.js
- PUG templating engine
- MySQL2 (promise-based)
- Docker

## Key Files
- `app/app.js` – All Sprint 3 Express routes
- `app/views/` – PUG templates
- `app/services/db.js` – MySQL connection pool
- `static/style.css` – Styles

## Sprint 3 User Stories
- As a student, I want to browse a directory of potential study partners.
- As a student, I want to see a peer's profile, skills and enrolled modules.
- As a student, I want to see all study sessions available.
- As a student, I want to see the full details of a session including participants.
- As a student, I want to filter sessions by topic category.

## How to Run
```bash
docker-compose up
```
Visit: http://localhost:3000
