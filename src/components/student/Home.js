import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./home.css"; // Styling file for Home component

const Home = ({ userName = "Student", recentlyViewed = [], mostPopular = [] }) => {
  return (
    <div className="home">
      {/* Header Section */}
      <Header userName={userName} />

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
      <Footer />
    </div>
  );
};

export default Home;
