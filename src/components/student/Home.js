import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import courses from "../Courses"; // Import the courses array
import "./home.css";

const Home = ({ userName = "Student" }) => {
  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter courses based on selected category
  const filteredCourses = selectedCategory 
    ? courses.filter(course => {
        // Map course titles to corresponding categories
        const courseCategories = {
          'Development': ['Course 1', 'Course 3'],
          'Business': [],
          'IT & Software': ['Course 2'],
          'Design': ['Course 4'],
          'Marketing': [],
          'Personal Development': []
        };
        
        return courseCategories[selectedCategory].includes(course.title);
      })
    : courses;

  // Filter most popular courses
  const mostPopular = filteredCourses.filter(course => course.rating === "⭐⭐⭐⭐⭐");
  
  // Select a few recently viewed (you might want to implement this with state or context later)
  const recentlyViewed = filteredCourses.slice(0, 3);

  return (
    <div className="home">
      {/* Header Section - Pass down category selection */}
      <Header 
        onCategorySelect={(category) => setSelectedCategory(category)}
        selectedCategory={selectedCategory}
      />

      {/* Main Content */}
      <main className="home-main">
        <div className="main-title">
          <h2>Welcome, {userName}</h2>
          <button>My Courses</button>
        </div>
        
        {/* Category Filter Display */}
        {selectedCategory && (
          <div className="category-filter">
            <h3>
              Showing Courses in {selectedCategory}
              <button 
                onClick={() => setSelectedCategory(null)}
                className="clear-filter"
              >
                Clear Filter
              </button>
            </h3>
          </div>
        )}

        {/* Featured Course Section */}
        <div className="featured-section">
          <div className="featured-image">
            <img
              src={filteredCourses[0]?.image}
              alt={filteredCourses[0]?.title}
              className="featured-image"
            />
            <div className="featured-details">
              <h3>{filteredCourses[0]?.title}</h3>
              <p>{filteredCourses[0]?.description}</p>
              <p>{filteredCourses[0]?.rating}</p>
            </div>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="recently-viewed">
          <h3>Recently Viewed</h3>
          <div className="course-grid">
            {recentlyViewed.map((course) => (
              <div className="course-card" key={course.id}>
                <img src={course.image} alt={course.title} />
                <div className="course-card-details">
                  <p>{course.title}</p>
                  <p>{course.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Popular Section */}
        <div className="most-popular">
          <h3>Most Popular Courses</h3>
          <div className="course-grid">
            {mostPopular.map((course) => (
              <div className="course-card" key={course.id}>
                <img src={course.image} alt={course.title} />
                <div className="course-card-details">
                  <p>{course.title}</p>
                  <p>{course.description}</p>
                  <p>{course.rating}</p>
                </div>
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