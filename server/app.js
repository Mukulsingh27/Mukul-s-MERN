const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const db = `mongodb+srv://MukulSingh27:mukul7060888670@cms.3zoou.mongodb.net/webwithmukul?retryWrites=true&w=majority`;

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log(`connection with mongodb successful !`);
    })
    .catch((err) => {
        console.log(`OOPS , connection failed ?`);
    });

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
