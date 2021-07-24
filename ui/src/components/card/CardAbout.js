import React from "react";
import "./cardAbout.css";
import { NavLink } from "react-router-dom";
import aboutimg from "../images/img2.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const CardAbout = () => {
    return (
        <>
            <div className="cardAbout">
                <div className="imgBx animated">
                    <img src={aboutimg} className="img-fluid" alt="mukul" />
                </div>
                <div className="imgContent">
                    <div className="contentBx">
                        <h3>
                            Mukul Singh
                            <br />
                            <br />
                        </h3>
                    </div>
                    <ul className="sci">
                        <li>
                            <NavLink
                                to="https://www.facebook.com/mukul.chaudhary.568847"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="https://www.instagram.com/mukul_chaudhary_27/"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="https://www.linkedin.com/in/mukul-singh-a25613171/"
                                target="_blank"
                            >
                                <LinkedInIcon />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CardAbout;
