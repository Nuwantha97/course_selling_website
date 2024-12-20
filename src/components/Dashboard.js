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
import CourseCard from './CourseCard';


const Dashboard = () => {
    // Sample course data
    const courses = [
      {
        title: 'Introduction to React',
        description: 'Learn the fundamentals of React including components, props, and state management.',
        thumbnail: '/photos/web dev.jpg',
        instructor: 'Jane Doe',
        duration: '6 hours',
        students: 234,
        progress: 50,
        lessons: 12,
        price: 49.99,
        category: 'Programming',
      },
      {
        title: 'Mastering Python',
        description: 'Become an expert in Python programming and data analysis.',
        thumbnail: '/photos/web dev2.jpg',
        instructor: 'John Smith',
        duration: '8 hours',
        students: 120,
        progress: 75,
        lessons: 16,
        price: 59.99,
        category: 'Programming',
      },
      {
        title: 'UI/UX Design Principles',
        description: 'Design stunning user interfaces and experiences for web and mobile applications.',
        thumbnail: '/photos/ml course.jpg',
        instructor: 'Sarah Lee',
        duration: '4 hours',
        students: 98,
        progress: 20,
        lessons: 10,
        price: 39.99,
        category: 'UI/UX Design',
      },
      {
        title: 'UI Design',
        description: 'Design stunning user interfaces and experiences for web and mobile applications.',
        thumbnail: '/photos/ml course2.jpg',
        instructor: 'Sarah Lee',
        duration: '4 hours',
        students: 98,
        progress: 20,
        lessons: 10,
        price: 19.99,
        category: 'UI/UX Design',
      },
    ];

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
        <div className="courses-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <button className="see-more-button">See More</button>
      </div>

      {/* Most Viewed Courses Section */}
      <div className="courses-section">
        <h2>Most Viewed Courses</h2>
        <div className="courses-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
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
