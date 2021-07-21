const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello home");
});

app.get("/about", (req, res) => {
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
