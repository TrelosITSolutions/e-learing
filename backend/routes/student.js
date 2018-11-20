const express = require("express");

const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/student/signup", studentController.createStudent);

router.post("/student/login", studentController.studentLogin);

module.exports = router;
