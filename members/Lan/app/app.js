// Sprint 3 - StudyBuddy Application
// Author: Lan
// Express server with all Sprint 3 pages

"use strict";

const express = require("express");
const path    = require("path");
const db      = require("./services/db");

const app = express();

app.set("view engine", "pug");
app.set("views",  path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../static")));
app.use(express.urlencoded({ extended: true }));

/* ── HOME ─────────────────────────────────────── */
app.get("/", (_req, res) => res.render("index", { title: "StudyBuddy Home" }));

/* ── USERS LIST ───────────────────────────────── */
app.get("/users", async (_req, res) => {
  const sql = `
    SELECT u.user_id, u.first_name, u.last_name, u.academic_level,
           d.name AS dept, uni.name AS uni
    FROM   user u
    JOIN   department d  ON d.department_id = u.department_id
    JOIN   university uni ON uni.university_id = u.university_id
    ORDER  BY u.first_name`;
  const users = await db.query(sql).catch(e => { console.error(e); return []; });
  res.render("users", { title: "Find a Buddy", users });
});

/* ── USER PROFILE ─────────────────────────────── */
app.get("/users/:id", async (req, res) => {
  const uid = req.params.id;
  const [user] = await db.query(
    `SELECT u.*, d.name AS dept, uni.name AS uni
     FROM user u
     JOIN department d ON d.department_id = u.department_id
     JOIN university uni ON uni.university_id = u.university_id
     WHERE u.user_id = ?`, [uid]
  ).catch(() => [[]]);

  if (!user) return res.status(404).render("error", { message: "User not found" });

  const skills  = await db.query(`SELECT s.skill_name, us.proficiency_level FROM user_skill us JOIN skill s ON s.skill_id = us.skill_id WHERE us.user_id = ?`, [uid]).catch(() => []);
  const courses = await db.query(`SELECT c.course_code, c.course_name, e.semester, e.year FROM enrollment e JOIN course c ON c.course_id = e.course_id WHERE e.user_id = ?`, [uid]).catch(() => []);

  res.render("profile", { title: user.first_name + " " + user.last_name, user, skills, courses });
});

/* ── SESSIONS LISTING ─────────────────────────── */
app.get("/sessions", async (req, res) => {
  const { tag } = req.query;
  let   sql     = `SELECT ss.session_id, ss.topic, ss.location, ss.scheduled_time,
                          ss.max_participants, u.first_name, u.last_name,
                          COUNT(sp.user_id) AS joined
                   FROM study_session ss
                   JOIN user u ON u.user_id = ss.created_by
                   LEFT JOIN session_participant sp ON sp.session_id = ss.session_id`;
  const params  = [];
  if (tag) { sql += " WHERE ss.topic LIKE ?"; params.push(`%${tag}%`); }
  sql += " GROUP BY ss.session_id ORDER BY ss.scheduled_time";
  const sessions = await db.query(sql, params).catch(() => []);
  res.render("sessions", { title: "Study Sessions", sessions, tag });
});

/* ── SESSION DETAIL ───────────────────────────── */
app.get("/sessions/:id", async (req, res) => {
  const sid = req.params.id;
  const [session] = await db.query(
    `SELECT ss.*, u.first_name, u.last_name, u.user_id AS host_id
     FROM study_session ss JOIN user u ON u.user_id = ss.created_by WHERE ss.session_id = ?`, [sid]
  ).catch(() => [[]]);

  if (!session) return res.status(404).render("error", { message: "Session not found" });

  const participants = await db.query(
    `SELECT u.user_id, u.first_name, u.last_name, sp.status
     FROM session_participant sp JOIN user u ON u.user_id = sp.user_id WHERE sp.session_id = ?`, [sid]
  ).catch(() => []);

  res.render("session-detail", { title: session.topic, session, participants });
});

/* ── TAGS ─────────────────────────────────────── */
app.get("/tags", async (_req, res) => {
  const tags = await db.query(
    `SELECT topic AS tag, COUNT(*) AS n FROM study_session GROUP BY topic ORDER BY n DESC`
  ).catch(() => []);
  res.render("tags", { title: "Topics", tags });
});

app.listen(3000, () => console.log("Server → http://127.0.0.1:3000/"));
