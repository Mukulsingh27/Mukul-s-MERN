import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const FormInner = () => {
    // const [formData, setFormData] = useState({
    //     fname: "",
    //     phone: "",
    //     email: "",
    //     msg: "",
    // });
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

    // const inputEvent = (event) => {
    //     const { name, value } = event.target;

    //     setFormData((val) => {
    //         return {
    //             ...val,
    //             [name]: value,
    //         };
    //     });
    // };

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     Swal.fire(
    //         "Thank you",
    //         `${formData.fname} for contacting us, we'll revert back to you super soon !`,
    //         "success"
    //     );
    //     setFormData("");
    // };

    const [userdata, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const callContactPage = async () => {
        try {
            const res = await fetch("/getData", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setUserData({
                ...userdata,
                name: data.name,
                email: data.email,
                phone: data.phone,
            });

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        callContactPage();
    }, []);

    //storing user data
    const userMessage = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({
            ...userdata,
            [name]: value,
        });
    };

    //sending data to beckend
    const sendContactData = async (e) => {
        e.preventDefault();
        const { name, email, phone, message } = userdata;
        const res = await fetch("/contact", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                message,
            }),
        });

        const data = await res.json();
        if (!data) {
            console.log("message not sent");
        } else {
            alert("Message send");
            setUserData({ ...userdata, message: "" });
        }
    };

    return (
        <>
            <form className="my-5" method="post">
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
                        value={userdata.name}
                        onChange={userMessage}
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
                            value={userdata.phone}
                            onChange={userMessage}
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
                            value={userdata.email}
                            onChange={userMessage}
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
                        name="message"
                        value={userdata.message}
                        onChange={userMessage}
                    ></textarea>
                </div>
                <div className="col-12">
                    <button
                        style={btn[0]}
                        type="submit"
                        onClick={sendContactData}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormInner;
