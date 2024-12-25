import React from 'react';
import './InsHome.css';
import Footer from '../Footer';

const InsHome = () => {
  const courses = [
    {
      title: "Machine Learning",
      image: "/images/machine-learning.png"
    },
    {
      title: "C Programming",
      image: "/images/c-programming.png"
    },
    {
      title: "AI Course",
      image: "/images/ai-course.png"
    },
    {
      title: "Python Programming",
      image: "/images/python-course.png"
    }
  ];

  return (
    <div className="ins-home">
      <header className="ins-header">
        <div className="profile-section">
          <div className="profile-placeholder"></div>
          <nav>
            <button className="active">My Courses</button>
            <button>Payment</button>
            <button>Notification</button>
          </nav>
          <div className="instructor-controls">
            <button className="instructor-btn">Instructor</button>
            <button className="profile-btn">N</button>
          </div>
        </div>
      </header>

      <div className="welcome-banner">
        <h1>Welcome Nuwantha !</h1>
        <div className="banner-image">
          <img src="/photos/image 1.png" alt="Teacher at chalkboard" />
        </div>
      </div>

      <section className="course-section">
        <h2>Create New Course</h2>
        <div className="create-course-btn">
          <span className="plus-icon">+</span>
        </div>

        <h2>My Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} />
              <div className="course-placeholder"></div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default InsHome;