const express = require("express");

const parentController = require("../controllers/parentController");
const checkParentAuth = require("../middlewares/checkParentAuth");

const router = express.Router();

router.post("/signup", parentController.createParent);

router.post("/login", parentController.parentLogin);

router.get("/test", checkParentAuth, (req, res, next)=>{
    return res.status(200).json({
        message: 'Allowed'
    });
});

module.exports = router;
