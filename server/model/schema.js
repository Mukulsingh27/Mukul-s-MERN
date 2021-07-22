const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: true,
        maxlength: 30,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Email alreday registered"],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid email");
            }
        },
    },
    title: {
        type: String,
        required: true,
        maxlength: 25,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        min: 10,
        // unique: [true, "Phone Number alreday registered"],
    },
    dob: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    cpassword: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});

//we are hasing the password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const round = 12;
        this.password = await bcrypt.hash(this.password, round);
        this.cpassword = await bcrypt.hash(this.cpassword, round);
    }
    next();
});

//generating Auth token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (e) {
        console.log(e);
    }
};

const User = mongoose.model("user", userSchema);

module.exports = User;
