import React from "react";

import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
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
                                        action="/register"
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
                                                    placeholder="First Name"
                                                    name="firstName"
                                                />
                                            </div>
                                            {/* <!-- last name --> */}
                                            <div className="col-sm-6">
                                                <input
                                                    required
                                                    className="form-control form-control-user"
                                                    type="text"
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                    name="lastName"
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
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- submit button --> */}
                                        <button
                                            className=" d-block btn-user w-100 buttonFilled home-register"
                                            // style={{ backgroundColor: "#d1510a" }}
                                            type="submit"
                                        >
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
                {/* include('common/footer');     */}
            </div>
        </div>
    );
};

export default Register;