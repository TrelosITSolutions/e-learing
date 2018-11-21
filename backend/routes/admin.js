const express = require("express");

const adminController = require("../controllers/adminController");
const checkAdminAuth = require("../middlewares/checkAdminAuth");

const router = express.Router();

router.post("/signup", adminController.createAdmin);

router.post("/login", adminController.adminLogin);

router.get("/test", checkAdminAuth, (req, res, next)=>{
    return res.status(200).json({
        message: 'Allowed'
    });
});

module.exports = router;
