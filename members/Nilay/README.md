# Nilay – Sprint 3 Contribution

## Overview
This folder contains Nilay's Sprint 3 implementation for the StudyBuddy application.

## Pages Implemented
| Page | Route | Description |
|------|-------|-------------|
| Users List | `GET /users` | Lists all registered study buddies by department and level |
| User Profile | `GET /users/:id` | Shows a student's full profile, skills and courses |
| Sessions Listing | `GET /sessions` | Browse all study sessions |
| Session Detail | `GET /sessions/:id` | Full session info with participants |
| Tags / Categories | `GET /tags` | Browse sessions by topic category |

## Technologies Used
- Node.js + Express.js
- PUG templating engine
- MySQL2 (promise-based)
- Docker dev environment

## Key Files
- `app/app.js` – Express server with Sprint 3 routes
- `app/views/` – PUG templates
- `app/services/db.js` – MySQL2 connection pool
- `static/style.css` – Stylesheet

## Sprint 3 User Stories
- As a student, I want to see a list of all registered students.
- As a student, I want to view another student's profile with their skills.
- As a student, I want to browse and filter available study sessions.
- As a student, I want to see the details and participants of a session.
- As a student, I want to find sessions by topic.

## How to Run
```bash
docker-compose up
```
Visit: http://localhost:3000
