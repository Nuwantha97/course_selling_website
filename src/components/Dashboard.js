import React from 'react';
import Footer from './Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>Course Website</h2>
        </div>
        <div className="navbar-buttons">
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search any course" />
      </div>

      {/* Most Popular Courses Section */}
      <div className="courses-section">
        <h2>Most Popular Courses</h2>
        <div className="courses-list">
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
        </div>
        <button className="see-more-button">See More</button>
      </div>

      {/* Most Viewed Courses Section */}
      <div className="courses-section">
        <h2>Most Viewed Courses</h2>
        <div className="courses-list">
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
        </div>
        <button className="see-more-button">See More</button>
      </div>

      {/* Promo Section */}
      <div className="promo-section">
        <h3>Quality Education for Everyone, Without Barriers.</h3>
        <p>Start Today!</p>
        <button>Log in</button>
        <button>Sign up</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
