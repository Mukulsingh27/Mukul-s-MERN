import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/images/logoMD.png";
import { UserContext } from "../App";

const Navbar = () => {
    const btn = [
        {
            fontWeight: "600",
            fontSize: "12px",
            letterSpacing: "1px",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "50px",
            transition: "0.5s",
            color: "#fff",
            border: "2px solid #538756",
            background: "#538756",
            textDecoration: "none",
        },
    ];

    const { state, dispatch } = useContext(UserContext);

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">
                            Logout
                        </NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                            Login
                        </NavLink>
                    </li>
                </>
            );
        }
    };
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">
                                    {/* Mukul's MERN */}
                                    <img
                                        className="main_logo"
                                        src={logo}
                                        alt="logo"
                                    />
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <RenderMenu />
                                        {/* <li className="nav-item">
                                <a
                                    className="nav-link disabled"
                                    href="#"
                                    tabindex="-1"
                                    aria-disabled="true"
                                >
                                    Disabled
                                </a>
                            </li> */}
                                    </ul>
                                    <form className="d-flex">
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button
                                            style={btn[0]}
                                            className="btn btn-outline-success"
                                            type="submit"
                                        >
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
