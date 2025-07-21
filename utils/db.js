const postgres = require("postgres");
const {DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD} = process.env;
module.exports = postgres({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
});
