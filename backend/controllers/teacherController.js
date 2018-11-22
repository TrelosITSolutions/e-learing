const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Teacher = require("../models/teacher");
const Course = require("../models/course");

exports.createTeacher = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const teacher = new Teacher({
            email: req.body.email,
            password: hash
        });
        teacher
            .save()
            .then(result => {
                res.status(201).json({
                    message: "teacher created!",
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Invalid authentication credentials!"
                });
            });
    });
};

exports.teacherLogin = (req, res, next) => {
    let fetchedteacher;
    Teacher.findOne({ email: req.body.email })
        .then(teacher => {
            if (!teacher) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedteacher = teacher;
            return bcrypt.compare(req.body.password, teacher.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {
                    email: fetchedteacher.email,
                    teacherId: fetchedteacher._id,
                    role: {
                        student: false,
                        parent: false,
                        admin: false,
                        teacher: true,
                    }
                },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                teacherId: fetchedteacher._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};
exports.uploadCourse = (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const course = new Course({
        name: req.body.name,
        content: req.body.content,
        imagePath: url + "/uploads/courses/pdf" + req.file.filename,
    });
    course.save().then(createdCourse => {
        res.status(201).json({
            message: "Course uploaded successfully",
            course: {
                ...createdCourse,
                courseId: createdCourse._id,
            }
        });
    }).catch(error => {
            res.status(500).json({
                message: "Creating a upload failed! | Try a different name of upload | file type must be pdf "
            });
        });
};