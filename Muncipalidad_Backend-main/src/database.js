var mysql = require("mysql");

export const pool = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bc165d8722ea15",
  password: "1beee78e",
  database: "heroku_56583eea18608fd",
  port: 3306,
});
