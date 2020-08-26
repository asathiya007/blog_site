import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Posts from './components/Posts';

function App() {

  const [mode, setMode] = useState("user"); 

  const showContent = () => {
    if (mode === "user") {
      return <Posts />; 
    } 
    return <div>Admin - can view and make posts</div>; 
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Blog Site</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => setMode("user")}>Posts</Nav.Link>
          <Nav.Link onClick={() => setMode("admin")}>Admin</Nav.Link>
        </Nav>
      </Navbar>
      {showContent()}
    </div>
  );
}

export default App;
