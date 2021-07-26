import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [username, setUserName] = useState("");
    const callHomePage = async () => {
        try {
            const res = await fetch("/getData", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setUserName(data.name);
            setShow(true);
            setShow1(true);
            setShow2(true);
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        callHomePage();
    }, []);

    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-5 order-2 d-flex flex-column justify-content-center">
                                    <h1>
                                        {show1 ? "Welcome" : "Learn with us"}

                                        <strong className="brand-name">
                                            {show2
                                                ? ` ${username}`
                                                : " @Mukul's MERN"}
                                        </strong>
                                    </h1>
                                    <h3 className="my-3">
                                        {show
                                            ? "we welcome you back 😃"
                                            : "I myself is a team of talented developer who creates modern web-applications"}
                                    </h3>
                                    <center>
                                        <div className="mt-3">
                                            <NavLink
                                                to="/about"
                                                className="btn-get-started"
                                            >
                                                Explore
                                            </NavLink>
                                        </div>
                                    </center>
                                </div>

                                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img
                                        src=""
                                        className="img-fluid animated"
                                        alt="img"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
