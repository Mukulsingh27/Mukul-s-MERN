import React from "react";
import { NavLink } from "react-router-dom";
import ContactDetails from "./card/ContactDetails";
import { Cdetails } from "./card/CardAPI";
// import Form from './card/Form'

const Contact = () => {
    const imap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.7875436209!2d77.90980121043256!3d27.17615702076542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1625722560164!5m2!1sen!2sin";

    const btn = [
        {
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: "1px",
            display: "inline-block",
            padding: "10px 30px",
            borderRadius: "50px",
            transition: "0.5s",
            color: "#fff",
            border: "2px solid crimson",
            background: "crimson",
            textDecoration: "none",
        },
    ];
    return (
        <>
            <section className="contact-header">
                <div className="my-5">
                    <h1 className="text-center">Contact Me</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>
                                        Learn with us{" "}
                                        <strong className="brand-name">
                                            @Mukul
                                        </strong>
                                    </h1>
                                    {Cdetails.map((val, index) => {
                                        return (
                                            <ContactDetails
                                                key={index}
                                                left={val.left}
                                                right={val.right}
                                            />
                                        );
                                    })}
                                    <div className="mt-3">
                                        <NavLink to="" style={btn[0]}>
                                            Explore
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <iframe
                                        src={imap}
                                        title="Agra"
                                        className="map"
                                        allowfullscreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Form /> */}
            </section>
        </>
    );
};

export default Contact;
