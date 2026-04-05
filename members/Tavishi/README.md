# Tavishi – Sprint 3 Contribution

## Overview
This folder contains Tavishi's Sprint 3 implementation for the StudyBuddy application.

## Pages Implemented
| Page | Route | Description |
|------|-------|-------------|
| Users List | `GET /users` | Lists all registered students with dept/uni |
| User Profile | `GET /users/:id` | Full profile view with skills and courses |
| Sessions Listing | `GET /sessions` | All study sessions, filterable by tag |
| Session Detail | `GET /sessions/:id` | Detail page with host info and participants |
| Tags / Categories | `GET /tags` | Browse topics with session count |

## Technologies Used
- Node.js + Express.js
- PUG templating engine
- MySQL2 with Promise.all for parallel queries
- Docker development environment

## Key Files
- `app/app.js` – Sprint 3 routes with full error handling
- `app/views/` – PUG templates (one per page)
- `app/services/db.js` – MySQL connection pool
- `static/style.css` – Page styles

## Sprint 3 User Stories
- As a student, I want to see all users so I can find a study partner.
- As a student, I want to view a student's profile with their skills and courses.
- As a student, I want to browse sessions sorted by date.
- As a student, I want to view session details including all participants.
- As a student, I want to discover sessions by topic category.

## How to Run
```bash
docker-compose up
```
Visit: http://localhost:3000
