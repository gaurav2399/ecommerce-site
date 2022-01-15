import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="navbar-bg-color navbar" variant="light">
      <Navbar.Brand href="#" className="me-auto vertical-align logo">
        <img
          src={process.env.PUBLIC_URL + "/images/logo/shop-64.png"}
          alt="icon"
          className="icon-img"
        ></img>
        <h1>Neelpari.com</h1>
      </Navbar.Brand>
      <Nav className="nav-links ml-auto">
        <Nav.Link href="#all-categories">
          <h5>All Categories</h5>
        </Nav.Link>
        <Nav.Link href="#top-categories">
          <h5>Top Categories</h5>
        </Nav.Link>
        <Nav.Link href="#top-shops">
          <h5>Top Shops</h5>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
