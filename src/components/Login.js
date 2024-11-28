import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useAuth } from '../context/AuthContext';
import './login.css';

const Login = ({ onClose, onLoginSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate login credentials
    if (email === "abc@gmail.com" && password === "1234") {
      console.log("Login successful");
      login(email);
      onClose(); // Close the modal
      onLoginSuccess("Abc"); // Notify App of successful login with the username
      navigate("/home"); // Navigate to Home page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="modal-content">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Login;
