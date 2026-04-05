const express = require('express');
const router = express.Router();
const sessionModel = require('../models/sessionModel');

// ── LISTING PAGE ─────────────────────────────────────────────────
router.get('/', async function (req, res) {
  const { tag } = req.query;
  try {
    const sessions = await sessionModel.getAllSessions(tag);
    res.render('sessions', { title: 'Study Sessions', sessions, selectedTag: tag });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Could not load sessions.' });
  }
});

// ── DETAIL PAGE ──────────────────────────────────────────────────
router.get('/:id', async function (req, res) {
  const sid = req.params.id;
  try {
    const session = await sessionModel.getSessionById(sid);
    if (!session) return res.status(404).render('error', { message: 'Session not found.' });

    const participants = await sessionModel.getSessionParticipants(sid);
    res.render('session-detail', { title: session.topic, session, participants });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Could not load session.' });
  }
});

module.exports = router;
