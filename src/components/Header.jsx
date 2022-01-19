import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-bg-color navbar"
      variant="light"
    >
      <Navbar.Brand href="/" className="me-auto vertical-align logo">
        <img
          src={process.env.PUBLIC_URL + "/images/logo/shop-64.png"}
          alt="icon"
          className="icon-img"
        ></img>
        <h1>Neelpari.com</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links ms-auto">
          <Nav.Link eventKey="1" href="#all-categories">
            <h5>All Categories</h5>
          </Nav.Link>
          <Nav.Link eventKey="2" href="#top-categories">
            <h5>Top Categories</h5>
          </Nav.Link>
          <Nav.Link eventKey="3" href="#top-shops">
            <h5>Top Shops</h5>
          </Nav.Link>
          <Nav.Link eventKey="4" href="/admin">
            <div className="admin">
              <FontAwesomeIcon icon={faUser} className="admin-icon" />
              <h5 className="admin-text">Admin</h5>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
