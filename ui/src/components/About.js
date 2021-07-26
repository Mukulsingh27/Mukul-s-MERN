import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import CardAbout from "./card/CardAbout";

const About = () => {
    const history = useHistory();

    const [userdata, setUserData] = useState({});
    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "get",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const data = await res.json();
            setUserData(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (e) {
            console.log(e);
            history.push("/login");
        }
    };

    useEffect(() => {
        callAboutPage();
    }, []);

    return (
        <>
            <section id="header-about" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <form method="get">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                                        <h1>
                                            Hello{" "}
                                            <strong className="brand-name">
                                                &nbsp;@{userdata.name}
                                            </strong>
                                        </h1>
                                        <h4>{userdata.title}</h4>
                                        <h3 className="my-3">
                                            Hi, I'm Mukul Singh, from agra, i'm
                                            a front-end & full stack-developer.
                                            welcome to Mukul's MERN
                                        </h3>
                                        <div className="mt-3">
                                            <NavLink
                                                to="/contact"
                                                className="btn-get-started"
                                            >
                                                Hire Me
                                            </NavLink>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 order-1 order-lg-1">
                                        <CardAbout />
                                    </div>
                                </div>
                            </div>

                            <br />
                            <br />

                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                                        <h1>
                                            My details
                                            {/* <strong className="brand-name">
                                                @lol
                                            </strong> */}
                                        </h1>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userdata._id}</p>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userdata.name}</p>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userdata.email}</p>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userdata.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userdata.title}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 order-1 order-lg-1 justify-content-center">
                                        <h1>
                                            <strong className="brand-name">
                                                @MERN
                                            </strong>
                                        </h1>
                                        <h4>web developer</h4>
                                        <h3 className="my-3">okk</h3>
                                        <h3 className="my-3">okk</h3>
                                        <h3 className="my-3">okk</h3>
                                        <h3 className="my-3">okk</h3>
                                        <h3 className="my-3">okk</h3>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
