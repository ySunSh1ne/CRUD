import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "A9.75851583ag",
  database: "crud",
});
