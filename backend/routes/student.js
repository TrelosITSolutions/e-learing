const express = require("express");

const studentController = require("../controllers/studentController");
const checkStudentAuth = require("../middlewares/checkStudentAuth");

const router = express.Router();

router.post("/signup", studentController.createStudent);

router.post("/login", studentController.studentLogin);

router.get("/test", checkStudentAuth, (req, res, next)=>{
    return res.status(200).json({
        message: 'Allowed'
    });
});

module.exports = router;