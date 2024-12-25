import React, { useState } from 'react';
import './Notification.css';
import Header from './student/Header';
import Footer from './Footer';

const Notification = () => {
  const [activeTab, setActiveTab] = useState('student');

  // Dummy notification data - in a real app, this would come from props or an API
  const notifications = [
    {
      id: 1,
      avatar: '/placeholder-avatar.jpg',
      content: 'New course material has been uploaded to your enrolled course.',
      time: '2 hours ago'
    },
    {
      id: 2,
      avatar: '/placeholder-avatar.jpg',
      content: 'Your assignment has been graded. Check your results now.',
      time: '3 hours ago'
    }
  ];

  return (
    <div>
      <Header />
      <div className="notification-container">

        <nav className="navigation">
          <ul>
            <li>Home</li>
            <li>My Learning</li>
            <li className="active">Notification</li>
            <li>About Us</li>
          </ul>
        </nav>

        <main className="main-content">
          <h1 className="notification-title">Notification</h1>
          
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => setActiveTab('student')}
            >
              Student
            </button>
            <button 
              className={`tab ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
          </div>

          <div className="notifications-list">
            {notifications.map(notification => (
              <div key={notification.id} className="notification-item">
                <img 
                  src={notification.avatar} 
                  alt="" 
                  className="notification-avatar"
                />
                <div className="notification-content">
                  <p>{notification.content}</p>
                  <span className="notification-time">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>

          <section className="learn-section">
            <h2>Learn With us.</h2>
            <div className="learn-image">
              <img src="/learning-illustration.png" alt="Online learning illustration" />
            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Notification;