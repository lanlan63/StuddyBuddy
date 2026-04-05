const express = require('express');
const router = express.Router();
const tagModel = require('../models/tagModel');

// ── TAGS / CATEGORIES ────────────────────────────────────────────
router.get('/', async function (req, res) {
  try {
    const tags = await tagModel.getTags();
    res.render('tags', { title: 'Browse Topics', tags });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Could not load topics.' });
  }
});

module.exports = router;
