import React, { useState } from "react";
import Swal from "sweetalert2";

const FormInner = () => {
    const [formData, setFormData] = useState({
        fname: "",
        phone: "",
        email: "",
        msg: "",
    });
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

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setFormData((val) => {
            return {
                ...val,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            "Thank you",
            `${formData.fname} for contacting us, we'll revert back to you super soon !`,
            "success"
        );
        setFormData("");
    };

    return (
        <>
            <form className="my-5" onSubmit={formSubmit}>
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter your Full Name"
                        name="name"
                    />
                </div>

                <div class="row">
                    <div className="col-md-6">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label"
                        >
                            Phone No.
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="+91**********"
                            name="phone"
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            for="exampleFormControlInput1"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="example@gmail.com"
                            name="email"
                        />
                    </div>
                </div>
                <br />

                <div className="mb-3">
                    <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="msg"
                    ></textarea>
                </div>
                <div className="col-12">
                    <button style={btn[0]} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormInner;
