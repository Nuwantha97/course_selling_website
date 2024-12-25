import React, { useState } from 'react';
import './CreateCurriculum.css';
import Footer from '../Footer';

const CreateCurriculum = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'Introduction',
      lessons: [
        { id: 1, title: 'Overview of Python and its applicationst', published: false },
        { id: 2, title: 'Installing Python and setting up the development environment', published: false },
        { id: 3, title: 'Running Python programs (IDLE, Command Line, and IDEs)', published: false }
      ]
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const handleMoreOptions = (e, item) => {
    e.preventDefault();
    setSelectedItem(item);
    setShowDropdown(true);
    setDropdownPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleAddLesson = (sectionId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: [...section.lessons, {
            id: Date.now(),
            title: 'New lesson',
            published: false
          }]
        };
      }
      return section;
    }));
  };

  const handleAddSection = () => {
    setSections([...sections, {
      id: Date.now(),
      title: 'New Section',
      lessons: []
    }]);
  };

  const handlePublish = (sectionId, lessonId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: section.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, published: true };
            }
            return lesson;
          })
        };
      }
      return section;
    }));
  };

  return (
    <div className="curriculum-container">
      <header className="curriculum-header">
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

      <div className="curriculum-layout">
        <aside className="sidebar">
          <h2>Web Development Course</h2>
          <nav>
            <a href="#">Information</a>
            <a href="#" className="active">Curriculum</a>
            <a href="#">Pricing</a>
          </nav>
        </aside>

        <main className="curriculum-content">
          <h1>Create Curriculum</h1>

          {sections.map(section => (
            <div key={section.id} className="curriculum-section">
              <div className="section-header">
                <div className="drag-handle">≡</div>
                <h3>{section.title}</h3>
                <button className="publish-btn">Publish section</button>
                <button className="more-options" onClick={(e) => handleMoreOptions(e, section)}>⋮</button>
              </div>

              <div className="lessons-list">
                {section.lessons.map(lesson => (
                  <div key={lesson.id} className="lesson-item">
                    <div className="drag-handle">●</div>
                    <span>{lesson.title}</span>
                    <button 
                      className={`publish-btn ${lesson.published ? 'published' : ''}`}
                      onClick={() => handlePublish(section.id, lesson.id)}
                    >
                      {lesson.published ? 'Published' : 'Publish'}
                    </button>
                    <button className="more-options" onClick={(e) => handleMoreOptions(e, lesson)}>⋮</button>
                  </div>
                ))}
                <button 
                  className="add-lesson-btn"
                  onClick={() => handleAddLesson(section.id)}
                >
                  + New lesson
                </button>
              </div>
            </div>
          ))}

          <button 
            className="add-section-btn"
            onClick={handleAddSection}
          >
            + New Section
          </button>

          <div className="action-buttons">
            <button className="save-btn">Save</button>
            <button className="next-btn">Next</button>
          </div>
        </main>
      </div>

      {showDropdown && (
        <div 
          className="options-dropdown"
          style={{ top: dropdownPosition.y, left: dropdownPosition.x }}
        >
          <button>Rename</button>
          <button>Add content</button>
          <button>Duplicate</button>
          <button className="delete">Delete</button>
        </div>
      )}

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default CreateCurriculum;