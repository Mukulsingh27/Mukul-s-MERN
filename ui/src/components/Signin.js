import React, { useContext, useState } from "react";
import regbg from "../components/reg/bg1.jpg";
import "../components/reg/css/reg.css";
import "../components/reg/css/util.css";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Signin = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credentials");
        } else {
            dispatch({ type: "USER", payload: true });
            window.alert("Login Successful");
            history.push("/");
        }
    };
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div
                        className="login100-more"
                        style={{ backgroundImage: `url(${regbg})` }}
                    ></div>

                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <form
                            className="login100-form"
                            id="register-form"
                            method="post"
                        >
                            <span className="login100-form-title p-b-59">
                                Sign Up
                            </span>

                            <div className="wrap-input100">
                                <span className="label-input100">Email</span>
                                <input
                                    className="input100"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address..."
                                />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100">
                                <span className="label-input100">Password</span>
                                <input
                                    className="input100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
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
                                        onClick={loginUser}
                                    >
                                        Login
                                    </button>
                                </div>

                                <NavLink
                                    to="/signup"
                                    className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
                                >
                                    Sign in
                                    <i className="fa fa-long-arrow-right m-l-5"></i>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
