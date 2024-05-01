import React from "react";

import { Helmet } from "react-helmet";

import FeatureCard from "../components/FeatureCard";
import QuestionCard from "../components/QuestionCard";
import "../css/StartPage.css";

const Home = (props) => {
    return (
        <div className="home-container">
            <Helmet>
                <title>Quizify |</title>
            </Helmet>
            {/* Header*/}
            <div className="home-header" id="header">
                <header
                    data-thq="thq-navbar"
                    className="home-navbar-interactive navbarContainer"
                >
                    <span className="logo">QUIZIFY</span>
                    <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                        <nav className="home-links">
                            <a href="#hero"> Home </a>
                            <a href="#register"> Features </a>
                            <a href="#about"> About </a>
                            <a href="#faq"> FAQ </a>
                        </nav>
                        <div className="home-buttons">
                            <button className="home-login buttonFlat">
                                <a href="/login">Login</a>
                            </button>
                            <button className="buttonFilled home-register">
                                <a href="/register">Register</a>
                            </button>
                        </div>
                    </div>
                    {/* Mobile BS. Ignored for now. Might even remove it */}
                    <div data-thq="thq-burger-menu" className="home-burger-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                            <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g>
                        </svg>
                    </div>
                    <div
                        data-thq="thq-mobile-menu"
                        className="home-mobile-menu1 mobileMenu"
                    >
                        <div className="home-nav">
                            <div className="home-top">
                                <span className="logo">QUIZIFY</span>
                                <div data-thq="thq-close-menu" className="home-close-menu">
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        className="home-icon02 socialIcons"
                                    >
                                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                    </svg>
                                </div>
                            </div>
                            <nav className="home-links1">
                                <span className="home-nav121 bodySmall">Home</span>
                                <span className="home-nav22 bodySmall">Create Quiz</span>
                                <span className="home-nav32 bodySmall">Explore Quizzes</span>
                                <span className="home-nav42 bodySmall">Sign Up</span>
                                <span className="home-nav523 bodySmall">Login</span>
                            </nav>
                            <div className="home-buttons1">
                                <button className="buttonFlat">Login</button>
                                <button className="buttonFilled">Register</button>
                            </div>
                        </div>
                        <div>
                            <svg
                                viewBox="0 0 950.8571428571428 1024"
                                className="home-icon04 socialIcons"
                            >
                                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 877.7142857142857 1024"
                                className="home-icon06 socialIcons"
                            >
                                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 602.2582857142856 1024"
                                className="home-icon08 socialIcons"
                            >
                                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Mobile BS ends here */}
                </header>
            </div>
            {/* Hero*/}
            <div className="home-hero" id="hero">
                <div className="home-hero1 heroContainer">
                    <div className="home-container1">
                        <h1 className="home-hero-heading">
                            Embark on a journey of knowledge and fun with our interactive
                            quizzes, where every question is an opportunity to challenge
                            yourself and learn something new.
                        </h1>
                        <div className="home-container2">
                            <div className="home-container3">
                                <div className="home-container4">
                                    <span className="home-hero-sub-heading bodyLarge">
                                        <span>
                                            Engage your audience with interactive quizzes
                                        </span>
                                    </span>
                                    <div className="home-btn-group">
                                        <a href="/join">
                                            <button className="buttonFilled">
                                                Join using Invite Code
                                            </button>
                                        </a>
                                        <a href="/create">
                                            <button className="home-hero-button2 buttonFlat" id="register">
                                                Create a new quiz
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TODO: Create an image and use it here */}
                    <img
                        src="https://placehold.co/200x200"
                        alt="placeholder"
                        loading="eager"
                        className="home-image"
                    />
                </div>
            </div>
            {/* Features*/}
            <div className="home-features">
                <div className="featuresContainer">
                    <div className="home-features1">
                        <div className="home-container5">
                            <span className="overline" id="features">
                                <span>Features</span>
                                <br></br>
                            </span>
                            <h2 className="home-features-heading heading2">
                                Unlock Exciting Features
                            </h2>
                            <span className="home-features-sub-heading bodyLarge">
                                <span>
                                    <span>
                                        <span>
                                            Take your quizzes to the next level with our innovative
                                            features
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                    </span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                    </span>
                                </span>
                                <span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                    </span>
                                    <span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                        <span>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: " ",
                                                }}
                                            />
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="home-container6">
                            <FeatureCard
                                heading="Customizable Quizzes"
                                subHeading="Create quizzes tailored to your needs with customizable options"
                            ></FeatureCard>
                            <FeatureCard
                                heading="Interactive Questions"
                                subHeading="Engage your audience with interactive and diverse question formats"
                            ></FeatureCard>
                            <FeatureCard
                                heading="Real-Time Results"
                                subHeading="Instantly view and analyze quiz results as they come in"
                            ></FeatureCard>
                            <FeatureCard
                                heading="Shareable Links"
                                subHeading="Easily share your quizzes with participants through unique links"
                            ></FeatureCard>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner*/}
            <div className="home-banner" id="about">
                <div className="home-banner1 bannerContainer">
                    <h1 className="home-banner-heading heading2">
                        Why Choose Our Quiz Hosting Platform?
                    </h1>
                    <span className="home-banner-sub-heading bodySmall">
                        <span>
                            Our platform offers a user-friendly interface to create,
                            customize, and host quizzes for various purposes such as
                            education, marketing, and entertainment. With a wide range of
                            question types, customization options, and result tracking
                            features, you can easily create engaging quizzes to captivate
                            your audience.
                        </span>
                        <br></br>
                    </span>
                    <button className="buttonFilled">Learn More</button>
                </div>
            </div>
            {/* FAQ*/}
            <div className="home-faq" id="faq">
                <div className="faqContainer">
                    <div className="home-faq1">
                        <div className="home-container7">
                            <span className="overline">
                                <span>FAQ</span>
                                <br></br>
                            </span>
                            <h2 className="home-text54 heading2">Common questions</h2>
                            <span className="home-text55 bodyLarge">
                                <span>
                                    Here are some of the most common questions that we get.
                                </span>
                                <br></br>
                            </span>
                        </div>
                        <div className="home-container8">
                            <QuestionCard
                                answer="To create a quiz, simply sign up for an account and click on the 'Create Quiz' button. You can then add questions, set options, and customize the quiz as needed."
                                question="How do I create a quiz on this platform?"
                            ></QuestionCard>
                            <QuestionCard
                                answer="Yes, you can customize the design of your quiz by choosing different themes, colors, and fonts. This allows you to match the quiz with your brand or personal style."
                                question="Can I customize the design of my quiz?"
                            ></QuestionCard>
                            <QuestionCard
                                answer="Absolutely! You can easily share your quiz on various social media platforms such as Facebook, Twitter, and LinkedIn. Simply use the share buttons provided."
                                question="Is it possible to share my quiz on social media?"
                            ></QuestionCard>
                            <QuestionCard
                                answer="Yes, you can view detailed analytics and results of all quizzes taken by participants. This includes the participant details, scores and answers chosen."
                                question="Can I see the results of the quizzes taken by participants?"
                            ></QuestionCard>
                            <QuestionCard
                                answer="There is no limit to the number of quizzes you can create on our platform. Feel free to create and host as many quizzes as you like!"
                                question="Is there a limit to the number of quizzes I can create?"
                            ></QuestionCard>
                            <QuestionCard
                                answer="There is no requirement to create an account to participate in a quiz. However, creating an account allows you to track your quiz results and save your progress."
                                question="Do I have to create an account to participate in a quiz?"
                            ></QuestionCard>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer*/}
            <div className="home-footer">
                <footer className="home-footer1 footerContainer">
                    <footer className="home-footer2">
                        <img
                            alt="logo"
                            src="https://images.unsplash.com/photo-1713986571499-2850497bf18c?ixid=M3w5MTMyMXwwfDF8YWxsfDV8fHx8fHwyfHwxNzE0MjE3NDI2fA&amp;ixlib=rb-4.0.3&amp;h=1500"
                            className="home-image1"
                        />
                        <span className="home-text58">
                            © 2021 teleportHQ, All Rights Reserved.
                        </span>
                        <div className="home-icon-group1">
                            <svg
                                viewBox="0 0 950.8571428571428 1024"
                                className="home-icon10 socialIcons"
                            >
                                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 877.7142857142857 1024"
                                className="home-icon12 socialIcons"
                            >
                                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                            </svg>
                        </div>
                    </footer>
                </footer>
            </div>
        </div>
    );
};

export default Home;
