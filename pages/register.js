import React, { useState } from "react";

import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import { setToken } from "../utils/cookie";
import axiosInstance from "../utils/axiosInstance";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");

    const handleRegister = async (e) => {
        const url = process.env.REACT_APP_API_URL || "http://localhost:2828";

        const data = {
            email: email,
            password: password,
            username: userName,
            firstName: firstName,
            lastName: lastName,
        };
        console.log("Data: ", data);

        // try {
        // const response = await fetch(`${url}/auth/register`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // });
        console.log("requesting");
        const response = axiosInstance.post(`${url}/auth/register`, data)
            .then(response => {
                console.log("Response: ", response);
            })
            .catch(err => {
                console.error("Error in the request or response of /register", err);
            });

        if (response.ok) {
            // const responseData = await response.json();
            // if (responseData.token) {
            //     console.log("Token received: ", responseData.token);
            console.log("Response received: ", response);
            //     // Store token in cookie
            //     setToken('jwt', responseData.token, { expires: 7 });
            //     console.log("Token stored in cookie: ", responseData.token);
        }
    }

    //         if (response.ok) {
    //             const responseData = await response.json();
    //             if (responseData.token) {
    //                 console.log("Token received: ", responseData.token);
    //                 // Store token in cookie
    //                 setToken('jwt', responseData.token, { expires: 7 });
    //                 console.log("Token stored in cookie: ", responseData.token);
    //             }
    //         } else {
    //             const errorData = await response.json();
    //             console.error("Error in the request or response of /register", errorData);
    //         }
    //     } catch (error) {
    //         console.error("Register failed:", error);
    //     }
    // };


    return (
        <div className="bg-gradient-primary d-flex flex-column h-100" style={{ backgroundColor: "#202020" }}>
            <Helmet>
                <title>Register</title>
                <style>{'body {background-color: black;}'}</style>
            </Helmet>
            <h3 className="text-white text-center mt-5">Register here to create and manage Quizzes!!</h3>
            <div className="container flex-grow-1">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-flex">
                                <div
                                    className="flex-grow-1 bg-register-image"
                                    style={{ backgroundImage: "url('images/register.png')", backgroundPosition: "center", backgroundSize: "cover" }}
                                ></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Create an Account</h4>
                                    </div>
                                    {/* <!-- form --> */}
                                    <form
                                        className="user"
                                        method="post"
                                        // action={`${url}/auth/register`}
                                        // onSubmit={handleRegister}
                                        onSubmit={handleRegister}
                                        id="registrationForm"
                                    >
                                        {/* <!-- name -->
                                        <!-- first name --> */}
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="text"
                                                    id="firstName"
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    placeholder="First Name"
                                                    name="first_name"
                                                />
                                            </div>
                                            {/* <!-- last name --> */}
                                            <div className="col-sm-6">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="text"
                                                    id="lastName"
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    placeholder="Last Name"
                                                    name="last_name"
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- email --> */}
                                        <div className="mb-3">
                                            <div className="col">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="email"
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Email Address"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- username --> */}
                                        <div className="row mb-3">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="text"
                                                    id="username"
                                                    aria-describedby="username"
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    placeholder="Username"
                                                    name="username"
                                                />
                                            </div>
                                            {/* <!-- password --> */}
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="password"
                                                    id="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- submit button --> */}
                                        <button
                                            className=" d-block btn-user w-100 buttonFilled home-register"
                                            type="submit" >
                                            Register Account
                                        </button>
                                        <hr />
                                        {/* <!-- Google and Facebook login --> */}
                                        {/* <div className="visually-hidden">
                                            <a
                                                className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                                role="button"
                                            ><i className="fab fa-google"></i>&nbsp; Register with
                                                Google</a
                                            ><a
                                                className="btn btn-primary d-block btn-facebook btn-user w-100"
                                                role="button"
                                            ><i className="fab fa-facebook-f"></i>&nbsp; Register with
                                                Facebook</a
                                            >
                                            <hr />
                                        </div> */}
                                    </form>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-link small "
                                            onClick={() => alert('Contact me to set a new password (only until I automate this process)')}>
                                            Forgot Password?
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-link small"
                                            onClick={() => window.location.href = '/login'}>
                                            Already have an account? Login!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;