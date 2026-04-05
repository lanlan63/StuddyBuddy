# Ali – Sprint 3 Contribution

## Overview
This folder contains Ali's Sprint 3 implementation for the StudyBuddy application.

## Pages Implemented
| Page | Route | Description |
|------|-------|-------------|
| Users List | `GET /users` | Shows all registered study buddies with department and university |
| User Profile | `GET /users/:id` | Full profile with skills and enrolled courses |
| Sessions Listing | `GET /sessions` | All available study sessions with participant count |
| Session Detail | `GET /sessions/:id` | Full detail view with participants list |
| Tags / Categories | `GET /tags` | Browse sessions grouped by topic |

## Technologies Used
- Node.js + Express.js (routing and server)
- PUG (server-side HTML templating)
- MySQL2 (database queries)
- Docker (development environment)

## Key Files
- `app/app.js` – All Express routes for Sprint 3
- `app/views/` – PUG templates for each page
- `app/services/db.js` – MySQL connection pool utility
- `static/style.css` – Page styling

## Sprint 3 User Stories Implemented
- As a student, I want to see a list of all study buddies so I can find someone to study with.
- As a student, I want to view a user's full profile including their skills and courses.
- As a student, I want to browse study sessions and see how many participants have joined.
- As a student, I want to view the full details of a study session including who's participating.
- As a student, I want to filter sessions by topic/category so I can find relevant sessions.

## How to Run
```bash
# From the project root
docker-compose up
```
Then visit http://localhost:3000
