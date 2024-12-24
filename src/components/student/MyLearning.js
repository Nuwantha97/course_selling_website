import React from 'react';
import './MyLearning.css';
import Footer from '../Footer';
import Header from './Header';
import SecondHeader from './SecondHeader';

const MyLearning = () => {
  const enrolledCourses = [
    { title: 'Web Development', image: '/api/placeholder/300/200', progress: 60 },
    { title: 'C Programming', image: '/api/placeholder/300/200', progress: 45 },
    { title: 'Machine Learning', image: '/api/placeholder/300/200', progress: 30 },
    { title: 'Python Programming', image: '/api/placeholder/300/200', progress: 75 },
  ];

  return (
    <div>
        <Header/>
        <SecondHeader/>
        <div className="learning-container">
        <h1>Enrolled Courses</h1>
        
        <div className="courses-grid">
            {enrolledCourses.map((course, index) => (
            <div key={index} className="course-card">
                <img src={course.image} alt={course.title} />
                <div className="course-info">
                <h3>{course.title}</h3>
                <div className="progress-bar">
                    <div 
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                    ></div>
                </div>
                <span className="progress-text">{course.progress}% Complete</span>
                </div>
            </div>
            ))}
        </div>

        <section className="learn-with-us">
            <h2>Learn With us.</h2>
            <div className="learn-image">
            <img src="./photos/dashbo.png" alt="Learning illustration" />
            </div>
        </section>

        </div>

        <Footer/>
    </div>
  );
};

export default MyLearning;