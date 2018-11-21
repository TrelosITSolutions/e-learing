const express = require("express");

const teacherController = require("../controllers/teacherController");
const checkTeacherAuth = require("../middlewares/checkTeacherAuth");

const router = express.Router();

router.post("/signup", teacherController.createTeacher);

router.post("/login", teacherController.teacherLogin);

router.get("/test", checkTeacherAuth, (req, res, next)=>{
    return res.status(200).json({
        message: 'Allowed'
    });
});

module.exports = router;