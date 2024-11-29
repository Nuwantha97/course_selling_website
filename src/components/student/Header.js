import React from "react";
import "./Header.css"; // Create a styling file for the header

const Header = ({ userName }) => {
  return (
    <header className="home-header">
      <div className="logo-search">
        <div className="logo">
          <img src="./logo1.webp" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <button>Search</button>
        </div>
      </div>
      <div className="categories-student">
        <button>Categories</button>
        <span>{userName}</span>
      </div>
    </header>
  );
};

export default Header;
