import React from 'react';
import './Header.css'
import { 
    Navbar, 
    Container, 
    Nav, 
    NavDropdown, 
    Form, 
    Button,
    Badge
  } from 'react-bootstrap';
  import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {

    //const avatarLetter = userEmail.charAt(0).toUpperCase();
    const avatarLetter ="N";
    const userType = "student";
  
  // Cart item count (you can make this dynamic)
  const cartItemCount = 3;

  return (
    <header>
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="localhost">
          <img src="/logo1.webp" alt="Logo" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Categories Dropdown */}
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item href="#web">Web development</NavDropdown.Item>
              <NavDropdown.Item href="#uiux">UI/UX design</NavDropdown.Item>
              <NavDropdown.Item href="#ml">Machine Learning</NavDropdown.Item>
              <NavDropdown.Item href="#ai">AI</NavDropdown.Item>
              <NavDropdown.Item href="#programming">Programming</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search Bar */}
          <div className="d-flex mx-auto" style={{ maxWidth: '400px' }}>
            <div className="position-relative w-100">
              <Search 
                className="position-absolute" 
                style={{ 
                  left: '10px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: '#6c757d'
                }} 
                size={16} 
              />
              <Form.Control
                type="search"
                placeholder="Search any course"
                style={{ paddingLeft: '35px' }}
              />
            </div>
          </div>

          {/* Right side items */}
          <Nav className="ms-auto align-items-center">
            {/* User Type Dropdown */}
            <NavDropdown 
              title={userType.charAt(0).toUpperCase() + userType.slice(1)} 
              id="user-type-dropdown"
            >
              <NavDropdown.Item>Student</NavDropdown.Item>
              <NavDropdown.Item>Instructor</NavDropdown.Item>
            </NavDropdown>

            {/* Cart Icon */}
            <Nav.Link href="#cart" className="position-relative mx-3">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <Badge 
                  bg="primary" 
                  className="position-absolute"
                  style={{ 
                    top: '-5px',
                    right: '-8px',
                    fontSize: '0.7rem'
                  }}
                >
                  {cartItemCount}
                </Badge>
              )}
            </Nav.Link>

            {/* Profile Dropdown */}
            <NavDropdown
              title={
                <div 
                  className="d-inline-block rounded-circle bg-primary text-white text-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    lineHeight: '32px'
                  }}
                >
                  {avatarLetter}
                </div>
              }
              id="profile-dropdown"
            >
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#courses">My Courses</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout" className="text-danger">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default Header;