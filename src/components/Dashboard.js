import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import './Dashboard.css';
import { Search } from 'lucide-react';


const Dashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <header className="header">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <a class="navbar-brand" href="#">
            <img src="/logo1.webp" alt="Logo" />
            </a>
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Web development</NavDropdown.Item>
              <NavDropdown.Item href="#action4">UI/UX design</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Machine Learning</NavDropdown.Item>
              <NavDropdown.Item href="#action5">AI</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Programming</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div class="search-container">
            <Form className="d-flex">
              <div className="position-relative">
                <Search className="position-absolute text-gray-400" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }} size={16} />
                <Form.Control
                  type="search"
                  placeholder="Search any course"
                  className="me-2 ps-8"
                  aria-label="Search"
                  style={{
                    paddingLeft: '40px',  // Increased padding to separate icon from text
                    minWidth: '300px'     // Optional: ensures search bar has good width
                  }}
                />
              </div>
            </Form>
          </div>
            <Button variant="outline-success">Sign up</Button>
            <Button variant="outline-success">Log in</Button>
        </Container>
      </Navbar>
      </header>

      <img src = "/cq5dam.web.1280.1280.png" alt='image' width="100%" height="auto"/>

      {/* Most Popular Courses Section */}
      <div className="courses-section">
        <h2>Most Popular Courses</h2>
        <div className="courses-list">
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
        </div>
        <button className="see-more-button">See More</button>
      </div>

      {/* Most Viewed Courses Section */}
      <div className="courses-section">
        <h2>Most Viewed Courses</h2>
        <div className="courses-list">
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
          <div className="course-card"></div>
        </div>
        <button className="see-more-button">See More</button>
      </div>

      {/* Promo Section */}
      <div className="promo-section">
        <h3>Quality Education for Everyone, Without Barriers.</h3>
        <p>Start Today!</p>
        <button>Log in</button>
        <button>Sign up</button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
