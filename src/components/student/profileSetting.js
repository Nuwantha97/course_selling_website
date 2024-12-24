import React, { useState } from 'react';
import { User } from 'lucide-react';
import './profileSetting.css';
import Header from './Header';
import Footer from '../Footer';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
        <Header/>
        <div className="profile-container">

        <h1>Profile settings</h1>

        <div className="profile-content">
            <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
                <label>First name</label>
                <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Mobile No.</label>
                <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                />
            </div>

            <button type="submit" className="save-btn">Save</button>
            </form>

            <div className="profile-image-section">
            <div className="image-placeholder">
                <User size={100} />
            </div>
            <div className="file-upload">
                <input type="file" id="file-input" className="file-input" />
                <label htmlFor="file-input" className="upload-btn">
                <span>Select file</span>
                <button>Upload</button>
                </label>
            </div>
            </div>
        </div>

        </div>
        <Footer/>
    </div>
  );
};

export default ProfileSettings;