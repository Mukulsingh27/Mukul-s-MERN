import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-12 pt-5 order-2 d-flex flex-column justify-content-center">
                                    <h1>
                                        Learn with us
                                        <strong className="brand-name">
                                            @Mukul
                                        </strong>
                                    </h1>
                                    <h3 className="my-3">
                                        I myself is a team of talented developer
                                        who creates modern web-applications
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
