// const { Pool } = require("pg");
// const pool = new Pool({
//   user: process.env.BD_USER,
//   host: process.env.DB_HOSTNAME,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.on("error", (err, client) => {
//   console.error("Unexpected error on idle client", err);
// });

// module.exports = pool;

const { Client } = require("pg");

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
