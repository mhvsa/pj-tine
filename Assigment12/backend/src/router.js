const express = require("express");
const router = express.Router();
const { repository } = require("./db");

router.get("/students", async (req, res) => {
  try {
    const students = await repository.findAll();
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const student = await repository.findOne(req.params.id);
    if (student) res.status(200).json(student);
    else res.status(404).send("Student doesn't exist");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/student", (req, res) => {
  const student = req.body;
  const studentIsValid =
    student.firstName && student.lastName && Object.keys(student).length === 2;

  if (studentIsValid) {
    try {
      repository.insert(student);
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong");
    }
  } else {
    res.status(422).send("Student body is invalid");
  }
});

router.put("/student", (req, res) => {
  const student = req.body;
  const studentIsValid =
    student.id &&
    student.firstName &&
    student.lastName &&
    Object.keys(student).length === 3;
  if (studentIsValid) {
    try {
      repository.update(student);
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong");
    }
  } else {
    res.status(422).send("Student body is invalid");
  }
});

router.delete("/student", (req, res) => {
  const student = req.body;
  const studentIsValid =
    student.id &&
    student.firstName &&
    student.lastName &&
    Object.keys(student).length === 3;
  if (studentIsValid) {
    try {
      repository.remove(student);
      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong");
    }
  } else {
    res.status(422).send("Student body is invalid");
  }
});
module.exports = router;
