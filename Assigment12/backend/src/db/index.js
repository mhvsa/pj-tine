const mysql = require("mysql");
const fs = require("fs");
const path = require("path");
const { createRepository } = require("./studentRepository");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "tinApp",
  multipleStatements: true
});

const repository = createRepository(connection);
const disconnect = connection.end;

const dbInit = () => {
  const sqlPath = path.resolve(__dirname + "/seed.sql");
  fs.readFile(sqlPath, "utf-8", (err, sql) => {
    if (!err) {
      connection.query(sql, error => {
        if (!error) {
          console.log("Database initialized");
        } else {
          console.log("Something went wrong at db init");
        }
      });
    } else {
      console.log("Something went wrong at reading db seed");
    }
  });
};


module.exports = {
  dbInit,
  repository,
  disconnect
};
