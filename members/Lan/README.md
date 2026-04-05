# Lan – Sprint 3 Contribution

## Overview
This folder contains Lan's Sprint 3 implementation for the StudyBuddy application.

## Pages Implemented
| Page | Route | Description |
|------|-------|-------------|
| Users List | `GET /users` | All registered study buddies |
| User Profile | `GET /users/:id` | Student profile with skills and courses |
| Sessions Listing | `GET /sessions` | All study sessions (filterable by topic) |
| Session Detail | `GET /sessions/:id` | Session info and participants |
| Tags / Categories | `GET /tags` | Topic-based session browsing |

## Technologies Used
- Node.js + Express.js
- PUG templating engine
- MySQL2
- Docker

## Key Files
- `app/app.js` – Sprint 3 Express routes
- `app/views/` – PUG page templates
- `app/services/db.js` – Database utility
- `static/style.css` – Styles

## How to Run
```bash
docker-compose up
```
Visit: http://localhost:3000
