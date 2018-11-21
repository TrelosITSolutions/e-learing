const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Student = require("../models/student");

exports.createStudent = (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10).then(hash => {
        const student = new Student({
            email: req.body.email,
            password: hash
        });
        student
            .save()
            .then(result => {
                res.status(201).json({
                    message: "student created!",
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

exports.studentLogin = (req, res, next) => {
    let fetchedstudent;
    Student.findOne({ email: req.body.email })
        .then(student => {
            if (!student) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedstudent = student;
            return bcrypt.compare(req.body.password, student.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {
                    email: fetchedstudent.email,
                    studentId: fetchedstudent._id,
                    role: {
                            student: true,
                            parent: false,
                            admin: false,
                            teacher: false,
                    }
                },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                studentId: fetchedstudent._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};
