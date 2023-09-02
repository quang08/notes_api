const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
  })
  .promise();

module.exports = {
  getNotes: async () => {
    const [rows] = await pool.query("select * from notes");
    return rows;
  },

  getNote: async (id) => {
    const [rows] = await pool.query("select * from notes where id = ?", [id]);
    return rows;
  },

  createNote: async (title, content) => {
    const [result] = await pool.query(
      "insert into notes (title, content) values (?, ?)",
      [title, content]
    );
    const id = result.insertId;
    return id;
  },
};
