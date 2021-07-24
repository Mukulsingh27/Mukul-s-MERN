import React from "react";
// import regbg from "../components/reg/bg.jpg";
import "../components/reg/css/reg.css";
import "../components/reg/css/util.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <form
                            className="login100-form"
                            id="register-form"
                            method="post"
                        >
                            <span className="login100-form-title p-b-59">
                                Sign Up
                            </span>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">
                                    Full Name
                                </span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name..."
                                    autoComplete="off"
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Email</span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email address..."
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">
                                    Profession
                                </span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="work"
                                    id="work"
                                    placeholder="title..."
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">
                                    Phone Number
                                </span>
                                <input
                                    className="input100"
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone No..."
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">DOB</span>
                                <input
                                    className="input100"
                                    type="date"
                                    name="dob"
                                    id="dob"
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">Password</span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="*************"
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <span className="label-input100">
                                    Confirm Password
                                </span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="*************"
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button
                                        type="submit"
                                        name="signup"
                                        id="signup"
                                        className="login100-form-btn"
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                <NavLink
                                    to="/login"
                                    className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
                                >
                                    Sign in
                                    <i className="fa fa-long-arrow-right m-l-5"></i>
                                </NavLink>
                            </div>
                        </form>
                    </div>

                    <div
                        className="login100-more"
                        // style={{ backgroundImage: `url(${regbg})` }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Signup;
