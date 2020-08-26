import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Blog Site</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>Posts</Nav.Link>
          <Nav.Link>Admin</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
