const express = require("express");

const teacherController = require("../controllers/teacherController");
const checkTeacherAuth = require("../middlewares/checkTeacherAuth");
const extractFile = require("../middlewares/checkUploadPdf");

const router = express.Router();

router.post("/signup", teacherController.createTeacher);
router.post("/login", teacherController.teacherLogin);

router.post("/uploadCourse", checkTeacherAuth, extractFile, teacherController.uploadCourse);
router.get("/courses", extractFile, teacherController.getCourses);
router.get("/course/:id", teacherController.getCourse);
router.put("/course/:id", checkTeacherAuth, extractFile, teacherController.updateCourse);
router.delete("/course/:id", checkTeacherAuth, teacherController.deleteCourse);


router.get("/test", checkTeacherAuth, (req, res, next)=>{
    return res.status(200).json({
        message: 'Allowed'
    });
});

module.exports = router;