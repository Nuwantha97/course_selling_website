import React from "react";
import "./Dashboard.css"; // For styling
import courses from "./Courses"; // Importing course details

const Dashboard = ({ onShowLogin, onShowRegister }) => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="logo-and-categories">
          <div className="logo">
            <img src="./logo1.webp" alt="Courses Logo" />
          </div>
          <button className="categories-btn">Categories</button>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <button>Search</button>
        </div>
        <div className="navigation">
          <button onClick={onShowLogin}>Login</button>
          <button onClick={onShowRegister}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Online Courses</h1>
          <p>Learn from the best instructors worldwide.</p>
          <button onClick={onShowRegister} className="register-btn">
            Register Free
          </button>
          <button onClick={onShowLogin} className="login-btn">
            Login
          </button>
        </div>
      </div>

      {/* Most Popular Courses */}
      <section className="popular-courses">
        <h2>Most Popular Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="rating">{course.rating}</div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Online Course Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
