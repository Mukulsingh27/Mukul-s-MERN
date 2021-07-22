const express = require("express");
const router = express.Router();
require("../databse/connection");
const User = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
    res.send("Hello home rouetr");
});

//registed part
router.post("/signup", (req, res) => {
    const { name, email, title, phone, dob, password, cpassword } = req.body;
    if (
        !name ||
        !email ||
        !title ||
        !phone ||
        !dob ||
        !password ||
        !cpassword
    ) {
        return res.status(422).json({ error: "all fields are mendatory" });
    }
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: "User already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password not matching" });
        } else {
            const user = new User({
                name,
                email,
                title,
                phone,
                dob,
                password,
                cpassword,
            });
            //hashing the password (middleware (pre))
            user.save()
                .then(() => {
                    res.status(201)
                        .json({ message: "User successfully registered" })
                        .catch((e) => {
                            res.status(500).json({ e: "Failed to registered" });
                        });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    });
});

//login part
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "all fields are mendatory" });
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("m_jwt", token, {
                expires: new Date(Date.now() + 3600000),
                httpOnly: true,
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "Login successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
