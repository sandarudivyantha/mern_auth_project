import React from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand as={Link} to="/" className="custom-navbar">
          MERN App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userInfo ? (
              <>
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Nav.Link>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  <FaSignInAlt /> Sign In
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
