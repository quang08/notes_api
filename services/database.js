import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
  })
  .promise();

export const getNotes = async () => {
  const [rows] = await pool.query("select * from notes");
  return rows;
};

export const getNote = async (id) => {
  const [rows] = await pool.query("select * from notes where id = ?", [id]);
  return rows;
};

export const createNote = async (title, content) => {
  const [result] = await pool.query(
    "insert into notes (title, content) values (?, ?)",
    [title, content]
  );
  const id = result.insertId;
  return getNote(id);
};

const notes = await createNote("test3", "testing3");
console.log(notes);
