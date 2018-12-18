const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");

exports.createAdmin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash => {
        const admin = new Admin({
            email: req.body.email,
            password: hash
        });
        admin
            .save()
            .then(result => {
                res.status(201).json({
                    message: "admin created!",
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

exports.adminLogin = (req, res, next) => {
    console.log(req.body);
    let fetchedadmin;
    Admin.findOne({ email: req.body.email })
        .then(admin => {
            if (!admin) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedadmin = admin;
            return bcrypt.compare(req.body.password, admin.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {
                    email: fetchedadmin.email,
                    adminId: fetchedadmin._id,
                    role: {
                        student: false,
                        parent: false,
                        admin: true,
                        teacher: false,
                    }
                },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                role: 'admin',
                id: fetchedadmin._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};
