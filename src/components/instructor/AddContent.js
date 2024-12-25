import React, { useState } from 'react';
import './AddContent.css';
import Footer from '../Footer';

const AddContent = () => {
  const [content, setContent] = useState({
    title: 'Overview of Python and its applicationst',
    description: '',
    published: false
  });

  const handleDescriptionChange = (e) => {
    setContent(prev => ({
      ...prev,
      description: e.target.value
    }));
  };

  const handlePublish = () => {
    setContent(prev => ({
      ...prev,
      published: true
    }));
  };

  const handleSave = () => {
    console.log('Saving content:', content);
  };

  const handleDelete = () => {
    console.log('Deleting content');
  };

  const handleAddContent = () => {
    console.log('Adding new content block');
  };

  return (
    <div className="content-container">
      <header className="content-header">
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

      <div className="content-layout">
        <aside className="sidebar">
          <h2>Web Development Course</h2>
          <nav>
            <a href="#">Information</a>
            <a href="#" className="active">Curriculum</a>
            <a href="#">Pricing</a>
          </nav>
        </aside>

        <main className="content-main">
          <h1>Add content</h1>

          <div className="content-section">
            <div className="content-header-row">
              <span className="bullet">●</span>
              <h3>{content.title}</h3>
              <button 
                className={`publish-btn ${content.published ? 'published' : ''}`}
                onClick={handlePublish}
              >
                {content.published ? 'Published' : 'Publish'}
              </button>
              <button className="more-options">⋮</button>
            </div>

            <div className="content-form">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={content.description}
                onChange={handleDescriptionChange}
                className="description-input"
                rows="12"
                placeholder="Enter content description..."
              />
            </div>

            <div className="add-content-section">
              <button 
                className="add-content-btn"
                onClick={handleAddContent}
              >
                Add Content
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button 
              className="save-btn"
              onClick={handleSave}
            >
              Save
            </button>
            <button 
              className="delete-btn"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </main>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AddContent;