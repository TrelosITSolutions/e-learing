const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const adminRoutes = require("./routes/admin");
const parentRoutes = require("./routes/parent");
const studentRoutes = require("./routes/student");
const teacherRoutes = require("./routes/teacher");

const app = express();

mongoose
    .connect(
        "mongodb+srv://trelos:" +
        process.env.MONGO_ATLAS_PW +
        "@tutorria-jxhti.mongodb.net/tutorria",
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

    app.use(bodyParser.json({type: 'application/json'}));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join("uploads")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
);
res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
);
next();
});

app.use("/api/student", studentRoutes);
app.use("/api/parent", parentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherRoutes);

module.exports = app;