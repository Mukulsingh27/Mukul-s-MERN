const jwt = require("jsonwebtoken");
const User = require("../model/schema");

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.mjwt;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({
            _id: verifyToken._id,
            "tokens.token": token,
        });

        if (!rootUser) {
            throw new Error("user not find");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (e) {
        res.status(401).send("unauthorised : No token provided");
        console.log(e);
    }
};

module.exports = authenticate;
