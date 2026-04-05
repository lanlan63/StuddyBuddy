const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// ── USERS LIST PAGE ──────────────────────────────────────────────
router.get('/', async function (req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.render('users', { title: 'Study Buddies', users });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Could not load users.' });
  }
});

// ── USER PROFILE PAGE ────────────────────────────────────────────
router.get('/:id', async function (req, res) {
  const uid = req.params.id;
  try {
    const user = await userModel.getUserById(uid);
    if (!user) return res.status(404).render('error', { message: 'User not found.' });

    const skills = await userModel.getUserSkills(uid);
    const courses = await userModel.getUserCourses(uid);

    res.render('profile', {
      title: `${user.first_name} ${user.last_name}`,
      user, 
      skills, 
      courses
    });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Could not load profile.' });
  }
});

module.exports = router;
