const { promisify } = require("util");

const INSERT_SQL = "INSERT INTO STUDENT(FIRST_NAME, LAST_NAME) VALUES(?,?);";
const UPDATE_SQL =
  "UPDATE STUDENT SET FIRST_NAME = ?, LAST_NAME = ? WHERE ID = ?;";
const DELETE_SQL = "DELETE FROM STUDENT WHERE ID = ?";
const FINDALL_SQL =
  "SELECT ID as id, FIRST_NAME as firstName, LAST_NAME as lastName FROM STUDENT";
const FINDONE_SQL =
  "SELECT ID as id, FIRST_NAME as firstName, LAST_NAME as lastName FROM STUDENT WHERE ID = ?";

const createRepository = connection => {
  connection.query = promisify(connection.query);
  const insert = async student => {
    const values = [student.firstName, student.lastName];
    try {
      await connection.query(INSERT_SQL, values);
      return student;
    } catch (err) {
      throw err;
    }
  };
  const update = async student => {
    const values = [student.firstName, student.lastName, student.id];
    try {
      await connection.query(UPDATE_SQL, values);
      return student;
    } catch (err) {
      throw err;
    }
  };

  const remove = async student => {
    const values = [student.id];
    try {
      await connection.query(DELETE_SQL, values);
      return student;
    } catch (err) {
      throw err;
    }
  };

  const findAll = async () => {
    try {
      const students = await connection.query(FINDALL_SQL);
      return students;
    } catch (err) {
      throw err;
    }
  };

  const findOne = async id => {
    try {
      const student = (await connection.query(FINDONE_SQL, [id]))[0];
      return student;
    } catch (err) {
      throw err;
    }
  };

  return {
    insert,
    update,
    remove,
    findAll,
    findOne
  };
};

module.exports = {
  createRepository
};
