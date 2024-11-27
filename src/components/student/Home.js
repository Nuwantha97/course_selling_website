import React from "react";
import "./home.css"; // Styling file

const Home = ({ userName = "Student", recentlyViewed = [], mostPopular = [] }) => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="home-header">
        <div className="logo-search">
          <div className="logo">
            <img src="./logo1.webp" alt="Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search courses..." />
            <button>Search</button>
          </div>
        </div>
        <div className="categories-student">
          <button>Categories</button>
          <span>{userName}</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="profile-sidebar">
        <h3>Profile</h3>
        <ul>
          <li>My Courses</li>
          <li>Cart</li>
          <li>Instructor</li>
          <li>Notifications</li>
          <li>Settings</li>
          <li>Payment</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="home-main">
        <div className="main-title">
          <h2>Home</h2>
          <button>My Courses</button>
        </div>
        <div className="featured-section">
          <div className="featured-image">
            <img
              src="./featured-placeholder.jpg"
              alt="Featured Course"
              className="featured-image"
            />
          </div>
        </div>
        <div className="recently-viewed">
          <h3>Recently Viewed</h3>
          <div className="course-grid">
            {recentlyViewed.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.image} alt={course.title} />
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="most-popular">
          <h3>Most Popular</h3>
          <div className="course-grid">
            {mostPopular.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.image} alt={course.title} />
                <p>{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="home-footer">
        <p>&copy; 2024 Online Course Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;