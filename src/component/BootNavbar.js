import {Navbar , Nav, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import React from 'react';
function BootNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Landing</Nav.Link>
            <Nav.Link  as={NavLink}  to="/home">Home</Nav.Link>
            <Nav.Link  as={NavLink}  to="/contact">Conatct</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BootNavbar;