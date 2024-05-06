import React from "react";

import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="bg-gradient-primary d-flex flex-column h-100" style={{ backgroundColor: "#202020" }}>
            <Helmet>
                <title>Login</title>
                <style>{'body {background-color: black;}'}</style>
            </Helmet>
            <h3 className="text-white text-center mt-5">Login to manage your Quizzes and create new ones!!</h3>
            <div className="container flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-lg-12 col-xl-10">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div
                                            className="flex-grow-1 bg-login-image"
                                            style={{ backgroundImage: "url('images/login.png')", backgroundPosition: "center", backgroundSize: "cover" }}
                                        ></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">
                                                    Welcome Back! <br />
                                                    Login to view your quizzes!!
                                                </h4>
                                            </div>
                                            {/* <!-- login form --> */}
                                            <form className="user" action="/login" method="post">
                                                <div className="mb-3">
                                                    <input
                                                        required
                                                        className="form-control form-control-user"
                                                        type="text"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email Address or Username"
                                                        name="email"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        required
                                                        className="form-control form-control-user"
                                                        type="password"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        name="password"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input custom-control-input"
                                                                type="checkbox"
                                                                id="remember-me" />
                                                            <label
                                                                className="form-check-label custom-control-label"
                                                                htmlFor="remember-me"
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className=" d-block btn-user w-100 buttonFilled home-register"
                                                    type="submit" >
                                                    Login
                                                </button>
                                                {/* <!-- temporarily hiding these options --> */}
                                                {/* <div className="visually-hidden">
                                                    <hr />
                                                    <a
                                                        className="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                                                        role="button"
                                                    ><i className="fab fa-google"></i>&nbsp; Login with
                                                        Google</a
                                                    ><a
                                                        className="btn btn-primary d-block btn-facebook btn-user w-100"
                                                        role="button"
                                                    ><i className="fab fa-facebook-f"></i>&nbsp; Login with
                                                        Facebook</a
                                                    >
                                                </div> */}
                                                <hr />
                                            </form>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-link small"
                                                    onClick={() => alert('Contact me to use a new password (only until I automate this process)')}
                                                >
                                                    Forgot Password?
                                                </button>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    className="btn btn-link small"
                                                    onClick={() => window.location.href = '/register'}>
                                                    New to the site? Register here!
                                                </button>
                                            </div>
                                        </div>
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

export default Login;