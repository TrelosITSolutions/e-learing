const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Parent = require("../models/parent");

exports.createParent = (req, res, next) => {
    console.log(req);
    bcrypt.hash(req.body.password, 10).then(hash => {
        const parent = new Parent({
            email: req.body.email,
            password: hash
        });
        parent
            .save()
            .then(result => {
                res.status(201).json({
                    message: "parent created!",
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

exports.parentLogin = (req, res, next) => {
    let fetchedparent;
    Parent.findOne({ email: req.body.email })
        .then(parent => {
            if (!parent) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            fetchedparent = parent;
            return bcrypt.compare(req.body.password, parent.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
            const token = jwt.sign(
                {
                    email: fetchedparent.email,
                    parentId: fetchedparent._id,
                    role: {
                        student: false,
                        parent: true,
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
                parentId: fetchedparent._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "Invalid authentication credentials!"
            });
        });
};
