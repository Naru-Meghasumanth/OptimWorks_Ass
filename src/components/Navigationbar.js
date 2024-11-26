import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './styles.css'

function Navigationbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data (e.g., tokens) from localStorage or session storage
    localStorage.removeItem('userToken'); // Replace 'userToken' with your specific token key
    sessionStorage.removeItem('userSession'); // Optional: If using session storage

    // Redirect the user to the login or home page
    navigate('/LoginPage'); // Replace '/login' with your desired redirect path
  };
  return (
    <Navbar className="nav-style" expand="lg">
      <Container>
        <h2 className='text-white pt-3 nav-logo'>SGS</h2>
        <Nav className="m-auto">
          <Link className="nav-link nav-text" to="/Dashboard">Dashboard</Link>
          <Link className="nav-link nav-text" to="/users">Users</Link>
          <Link className="nav-link nav-text" to="/roles">Roles</Link>
          <Link className="nav-link nav-text" to="/permissions">Permissions</Link>
        </Nav>
        <Navbar.Brand href="/"><Button className='bg-danger' onClick={handleLogout}>Log Out</Button></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;

