// Sprint 3 – StudyBuddy Main App
// All required pages: Users list, User profile, Listing, Detail, Tags

"use strict";

const express = require("express");
const path    = require("path");
const db      = require('./services/db');

const app = express();

// ── View engine setup ────────────────────────────────────────────
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// ── Static files & body parsing ──────────────────────────────────
app.use(express.static(path.join(__dirname, "../static")));
app.use(express.urlencoded({ extended: true }));

// ── Home ─────────────────────────────────────────────────────────
app.get("/", function (req, res) {
  res.render("index", { title: "StudyBuddy – Home" });
});

// ── USERS LIST PAGE ──────────────────────────────────────────────
// Shows all registered students with department and university
app.get("/users", async function (req, res) {
  try {
    const users = await db.query(`
      SELECT u.user_id, u.first_name, u.last_name, u.academic_level,
             d.name AS department, uni.name AS university
      FROM user u
      JOIN department d   ON u.department_id  = d.department_id
      JOIN university uni ON u.university_id   = uni.university_id
      ORDER BY u.first_name ASC
    `);
    res.render("users", { title: "Study Buddies", users });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Could not load users." });
  }
});

// ── USER PROFILE PAGE ────────────────────────────────────────────
// Detailed profile for a single student: skills + enrolled courses
app.get("/users/:id", async function (req, res) {
  const uid = req.params.id;
  try {
    const [user] = await db.query(
      `SELECT u.user_id, u.first_name, u.last_name, u.email,
              u.academic_level, u.bio, u.created_at,
              d.name AS department, uni.name AS university
       FROM user u
       JOIN department d   ON u.department_id  = d.department_id
       JOIN university uni ON u.university_id   = uni.university_id
       WHERE u.user_id = ?`, [uid]
    );
    if (!user) return res.status(404).render("error", { message: "User not found." });

    const skills  = await db.query(
      `SELECT s.skill_name, us.proficiency_level FROM user_skill us
       JOIN skill s ON us.skill_id = s.skill_id WHERE us.user_id = ?`, [uid]
    );
    const courses = await db.query(
      `SELECT c.course_code, c.course_name, e.semester, e.year
       FROM enrollment e JOIN course c ON e.course_id = c.course_id WHERE e.user_id = ?`, [uid]
    );
    res.render("profile", {
      title: `${user.first_name} ${user.last_name}`,
      user, skills, courses
    });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Could not load profile." });
  }
});

// ── LISTING PAGE ─────────────────────────────────────────────────
// All study sessions with optional topic filter
app.get("/sessions", async function (req, res) {
  const { tag } = req.query;
  const params  = [];
  let sql = `
    SELECT ss.session_id, ss.topic, ss.location, ss.scheduled_time,
           ss.max_participants, u.first_name, u.last_name,
           COUNT(sp.user_id) AS joined
    FROM study_session ss
    JOIN user u ON ss.created_by = u.user_id
    LEFT JOIN session_participant sp ON ss.session_id = sp.session_id
  `;
  if (tag) { sql += " WHERE ss.topic LIKE ?"; params.push(`%${tag}%`); }
  sql += " GROUP BY ss.session_id ORDER BY ss.scheduled_time ASC";

  try {
    const sessions = await db.query(sql, params);
    res.render("sessions", { title: "Study Sessions", sessions, selectedTag: tag });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Could not load sessions." });
  }
});

// ── DETAIL PAGE ──────────────────────────────────────────────────
// Full info for a single study session including participants
app.get("/sessions/:id", async function (req, res) {
  const sid = req.params.id;
  try {
    const [session] = await db.query(
      `SELECT ss.session_id, ss.topic, ss.location, ss.scheduled_time,
              ss.max_participants, u.first_name, u.last_name, u.user_id AS host_id
       FROM study_session ss
       JOIN user u ON ss.created_by = u.user_id WHERE ss.session_id = ?`, [sid]
    );
    if (!session) return res.status(404).render("error", { message: "Session not found." });

    const participants = await db.query(
      `SELECT u.user_id, u.first_name, u.last_name, sp.status
       FROM session_participant sp
       JOIN user u ON sp.user_id = u.user_id WHERE sp.session_id = ?`, [sid]
    );
    res.render("session-detail", { title: session.topic, session, participants });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Could not load session." });
  }
});

// ── TAGS / CATEGORIES ────────────────────────────────────────────
// Browse sessions grouped by topic
app.get("/tags", async function (req, res) {
  try {
    const tags = await db.query(
      `SELECT topic AS tag, COUNT(*) AS total
       FROM study_session GROUP BY topic ORDER BY total DESC`
    );
    res.render("tags", { title: "Browse Topics", tags });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Could not load topics." });
  }
});

// Start server
app.listen(3000, function () {
  console.log("StudyBuddy running at http://127.0.0.1:3000/");
});