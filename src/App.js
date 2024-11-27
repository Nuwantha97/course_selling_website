import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/student/Home'; // Import the new Home component
import './App.css';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleLoginSuccess = (username) => {
    setPopupMessage(`Login as "${username}"`);
    setTimeout(() => {
      setPopupMessage(""); // Clear the popup after 2 seconds
    }, 2000);
  };

  return (
    <Router>
      <div className="App">
        {/* Display Popup Message */}
        {popupMessage && <div className="popup">{popupMessage}</div>}

        {/* Routes for Dashboard and Home */}
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                onShowLogin={() => setShowLoginModal(true)}
                onShowRegister={() => setShowRegisterModal(true)}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>

        {/* Modals for Login and Register */}
        {showLoginModal && (
          <div className="overlay">
            <Login
              onClose={() => setShowLoginModal(false)}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        )}
        {showRegisterModal && (
          <div className="overlay">
            <Register onClose={() => setShowRegisterModal(false)} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
