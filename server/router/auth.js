const express = require("express");
const router = express.Router();
require("../databse/connection");
const User = require("../model/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

router.get("/", (req, res) => {
    res.send("Hello home rouetr");
});

//registed part
router.post("/register", (req, res) => {
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
            res.cookie("mjwt", token, {
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

//about us
router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get("/getData", authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.json({ error: "please fill the contact form" });
        }

        const userContact = await User.findOne({ _id: req.userId });

        if (userContact) {
            const userMessage = await userContact.addMessage(
                name,
                email,
                phone,
                message
            );

            await userContact.save();
            res.status(201).json({ message: "message stored successfully" });
        }
    } catch (e) {
        console.log(e);
    }
});

//logout page

router.get("/logout", (req, res) => {
    res.clearCookie("mjwt"), { path: "/" };
    res.status(200).send("user successfull logged out");
});

module.exports = router;
