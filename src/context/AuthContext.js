// src/context/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext(null);

// Authentication Provider Component
export const AuthProvider = ({ children }) => {
  // State to store user authentication information
  const [user, setUser] = useState(() => {
    // Initialize user state from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      email: '',
      isAuthenticated: false
    };
  });

  // Login function to update user state
  const login = (email, token) => {
    const userData = {
      email: email,
      isAuthenticated: true,
      token: token
    };
    
    // Update state
    setUser(userData);
    
    // Persist user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout function to reset user state
  const logout = () => {
    // Reset user state
    setUser({
      email: '',
      isAuthenticated: false
    });
    
    // Remove user data from localStorage
    localStorage.removeItem('user');
  };

  // Provide context value with user data and auth methods
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};