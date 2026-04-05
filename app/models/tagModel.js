const db = require('../services/db');

async function getTags() {
  return await db.query(`
    SELECT topic AS tag, COUNT(*) AS total
    FROM study_session 
    GROUP BY topic 
    ORDER BY total DESC
  `);
}

module.exports = {
  getTags
};
