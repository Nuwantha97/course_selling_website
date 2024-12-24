import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Course.css';
import Header from "./Header";
import Footer from "../Footer";

const Course = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const courseContents = [
    "Introduction to Python",
    "Data Types and Operators",
    "Control Flow",
    "Functions and Modules",
    "Data Structures",
    "File Handling",
    "Object-Oriented Programming (OOP)",
    "Error and Exception Handling",
    "Python Libraries and Frameworks",
    "Real-World Projects"
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div>
        <Header/>
        <div className="course-container">
        <div className="course-header">
            <div className="header-content">
            <h1>Learn Python programming</h1>
            <p className="instructor">Instructor Name</p>
            <p className="tagline">Become a Python Expert: for Both Academics and Industry</p>
            <div className="rating">Rating: 4.6</div>
            </div>
            <div className="header-image">
            <img src="./photos/python-course--500x500.webp" alt="Python Programming Course" />
            </div>
        </div>

        <div className="course-body">
            <div className="main-content">
            <section className="what-youll-learn">
                <h2>What You'll Learn</h2>
                <ul>
                <li>Understand Python fundamentals, including syntax, variables, and control flow.</li>
                <li>Work with essential data structures like lists, dictionaries, and tuples.</li>
                <li>Write reusable functions and modular, efficient code.</li>
                <li>Handle files and data formats (CSV, JSON) for real-world applications.</li>
                <li>Build practical projects and explore libraries for data analysis and automation.</li>
                <li>Apply Python skills to fields like web development, data science, and machine learning.</li>
                <li>Earn a certificate of completion to showcase your Python expertise.</li>
                </ul>
            </section>

            <section className="course-contents">
                <h2>Course Contents</h2>
                <div className="sections-list">
                {courseContents.map((section, index) => (
                    <div 
                    key={index} 
                    className="section-item"
                    onClick={() => toggleSection(index)}
                    >
                    <div className="section-header">
                        <span>{section}</span>
                        <ChevronDown className={`icon ${expandedSection === index ? 'rotate' : ''}`} />
                    </div>
                    </div>
                ))}
                </div>
            </section>

            <section className="instructor-info">
                <h2>About Your Instructor</h2>
                <div className="instructor-profile">
                <img src="/api/placeholder/120/120" alt="Instructor" className="instructor-image" />
                <p>Description About Instructor</p>
                </div>
            </section>
            </div>

            <aside className="course-sidebar">
            <div className="course-card">
                <h3>Course Includes</h3>
                <ul>
                <li>10 Lessons</li>
                <li>3 Quizzes</li>
                </ul>
                <div className="course-time">
                <h4>Time</h4>
                <p>3 Months</p>
                </div>
                <div className="course-payment">
                <h4>Payment</h4>
                <p className="price">$20.00</p>
                <button className="btn-primary">Pay Now</button>
                <button className="btn-secondary">Add Cart</button>
                </div>
            </div>
            </aside>
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default Course;