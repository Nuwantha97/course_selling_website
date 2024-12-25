import React, { useState } from 'react';
import './CreateCourse.css';
import Footer from '../Footer';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: 'Web Development Course',
    description: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleSave = () => {
    // Handle save functionality
    console.log('Saving course:', courseData);
  };

  const handleNext = () => {
    // Handle next step functionality
    console.log('Moving to next step');
  };

  return (
    <div className="create-course-container">
      <header className="course-header">
        <div className="logo-placeholder"></div>
        <nav>
          <button className="active">My Courses</button>
          <button>Payment</button>
          <button>Notification</button>
        </nav>
        <div className="profile-section">
          <button className="instructor-btn">Instructor</button>
          <button className="profile-btn">N</button>
        </div>
      </header>

      <main className="course-content">
        <h1>Welcome Nuwantha !</h1>
        
        <section className="course-form">
          <h2>Create your Course</h2>
          
          <div className="form-group">
            <label htmlFor="courseTitle">Course title</label>
            <input
              type="text"
              id="courseTitle"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="courseDescription">Describe your course</label>
            <textarea
              id="courseDescription"
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
              className="form-input description"
              rows="6"
            />
          </div>

          <div className="form-group">
            <label>Add Image</label>
            <div className="image-upload-container">
              <div className="image-preview">
                {courseData.image ? (
                  <img
                    src={URL.createObjectURL(courseData.image)}
                    alt="Course preview"
                  />
                ) : (
                  <div className="image-placeholder"></div>
                )}
              </div>
              <button className="upload-btn">
                <span className="upload-icon">⬆️</span>
                Upload
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
                id="courseImage"
              />
            </div>
          </div>

          <div className="form-actions">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="next-btn" onClick={handleNext}>Next</button>
          </div>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default CreateCourse;