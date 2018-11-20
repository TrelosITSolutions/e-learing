const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        if(!decodedToken.role.admin) {
            res.status(401).json({ message: "You are not admin" });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
    }
};
const adminGuard = (req, res, next) =>  {
    if(req.user && !req.user.role.admin) {
        next(new Error('You are not an admin'));
    } else {
        next();
    }
}