
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './PageRouter.css';

function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} /> {/* This route is rendered if no other routes match */}
      </Routes>
    </Router>
  );
}

export default PageRouter;
