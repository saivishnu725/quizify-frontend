// pages/index.js
import React from 'react';
import Home from './home';
import StartPage from './startpage';

const IndexPage = () => {
    /* TODO: logic to determine if the user is logged in */;
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <StartPage />;
    }

    return <Home />;
};

export default IndexPage;