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

// ── Import routes ────────────────────────────────────────────────
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/sessions');
const tagRoutes = require('./routes/tags');

// ── Mount routes ─────────────────────────────────────────────────
app.use('/', indexRoutes);
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);
app.use('/tags', tagRoutes);

// Start server
app.listen(3000, function () {
  console.log("StudyBuddy running at http://127.0.0.1:3000/");
});