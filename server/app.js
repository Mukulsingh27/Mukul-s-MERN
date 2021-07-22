const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
require("./databse/connection");
// const User = require("./model/schema");
app.use(express.json());

// linking the router files
app.use(require("./router/auth"));

const port = process.env.PORT;

const middleware = (req, res, next) => {
    console.log("hi middleware");
    next();
};

app.get("/", (req, res) => {
    res.send("Hello home");
});

app.get("/about", middleware, (req, res) => {
    res.send("Hello about");
});

app.get("/contact", (req, res) => {
    res.send("Hello contct");
});

app.get("/singup", (req, res) => {
    res.send("Hello login");
});

app.get("/signin", (req, res) => {
    res.send("Hello register");
});

app.listen(port, () => {
    console.log("Express connection successful !");
});
