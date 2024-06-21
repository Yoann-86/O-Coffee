const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.BD_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
});

module.exports = pool;
