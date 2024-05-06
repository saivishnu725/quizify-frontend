
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage.js';
import Register from './pages/Register.js';
{/*
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import UserProfile from './pages/UserProfile.js';
import Settings from './pages/Settings.js';
import NotFound from './pages/NotFound.js'; */}

function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/register" element={<Register />} />
        {/*
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} /> */} {/* This route is rendered if no other routes match */}
      </Routes>
    </Router>
  );
}

export default PageRouter;
