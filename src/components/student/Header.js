import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, ShoppingCart, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  // State management for different dropdown and mobile menu interactions
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs to manage dropdown click-outside behavior
  const profileDropdownRef = useRef(null);
  const categoriesDropdownRef = useRef(null);

  // Outside click handler for dropdowns to close when clicking elsewhere
  const handleClickOutside = (event, setDropdownOpen) => {
    if (
      profileDropdownRef.current && 
      !profileDropdownRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  // Add and remove event listeners for outside click handling
  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event, setProfileDropdownOpen);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Toggle functions for different interactive elements
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleCategoriesDropdown = () => {
    setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Predefined list of course categories
  const categories = [
    'Development', 'Business', 'IT & Software', 
    'Design', 'Marketing', 'Personal Development'
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src="./logo1.webp" 
            alt="Logo" 
            className="logo"
          />
        </div>

        {/* Search Bar */}
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          {/* Categories Dropdown */}
          <div 
            ref={categoriesDropdownRef} 
            className="categories-dropdown"
            onClick={toggleCategoriesDropdown}
          >
            <button className="categories-button">
              Categories
              <ChevronDown className="dropdown-icon" />
            </button>
            {isCategoriesDropdownOpen && (
              <div className="categories-menu">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="category-item"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Icons */}
          <button className="icon-button">
            <ShoppingCart className="icon" />
          </button>
          <button className="icon-button">
            <Bell className="icon" />
          </button>

          {/* Profile Dropdown */}
          <div 
            ref={profileDropdownRef} 
            className="profile-section"
          >
            <img 
              src="./profile-photo.jpg"
              alt="Profile" 
              className="profile-image"
              onClick={toggleProfileDropdown}
            />
            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <ul>
                  {[
                    'My Courses', 'Cart', 'Instructor', 
                    'Notifications', 'Settings', 
                    'Payment', 'Help', 'Logout'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="dropdown-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
        >
          <Menu className="menu-icon" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-navigation">
          <nav className="mobile-nav-content">
            {/* Mobile Categories Dropdown */}
            <div className="mobile-categories">
              <button 
                className="mobile-categories-button"
                onClick={toggleCategoriesDropdown}
              >
                Categories
                <ChevronDown className="dropdown-icon" />
              </button>
              {isCategoriesDropdownOpen && (
                <ul className="mobile-categories-list">
                  {categories.map((category, index) => (
                    <li 
                      key={index} 
                      className="mobile-category-item"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Mobile Menu Items */}
            <ul className="mobile-menu-items">
              <li className="mobile-menu-item">
                <ShoppingCart className="mobile-icon" />
                <span>Cart</span>
              </li>
              <li className="mobile-menu-item">
                <Bell className="mobile-icon" />
                <span>Notifications</span>
              </li>
              <li 
                className="mobile-menu-item"
                onClick={toggleProfileDropdown}
              >
                <img 
                  src="./profile-photo.jpg" 
                  alt="Profile" 
                  className="mobile-profile-image"
                />
                <span>Profile</span>
              </li>
              {isProfileDropdownOpen && (
                <ul className="mobile-profile-dropdown">
                  {[
                    'My Courses', 'Cart', 'Instructor', 
                    'Notifications', 'Settings', 
                    'Payment', 'Help', 'Logout'
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="mobile-dropdown-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;