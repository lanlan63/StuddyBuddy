const db = require('../services/db');

async function getAllUsers() {
  return await db.query(`
    SELECT u.user_id, u.first_name, u.last_name, u.academic_level,
           d.name AS department, uni.name AS university
    FROM user u
    JOIN department d   ON u.department_id  = d.department_id
    JOIN university uni ON u.university_id   = uni.university_id
    ORDER BY u.first_name ASC
  `);
}

async function getUserById(uid) {
  const [user] = await db.query(`
    SELECT u.user_id, u.first_name, u.last_name, u.email,
           u.academic_level, u.bio, u.created_at,
           d.name AS department, uni.name AS university
    FROM user u
    JOIN department d   ON u.department_id  = d.department_id
    JOIN university uni ON u.university_id   = uni.university_id
    WHERE u.user_id = ?
  `, [uid]);
  return user;
}

async function getUserSkills(uid) {
  return await db.query(`
    SELECT s.skill_name, us.proficiency_level 
    FROM user_skill us
    JOIN skill s ON us.skill_id = s.skill_id 
    WHERE us.user_id = ?
  `, [uid]);
}

async function getUserCourses(uid) {
  return await db.query(`
    SELECT c.course_code, c.course_name, e.semester, e.year
    FROM enrollment e 
    JOIN course c ON e.course_id = c.course_id 
    WHERE e.user_id = ?
  `, [uid]);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserSkills,
  getUserCourses
};
