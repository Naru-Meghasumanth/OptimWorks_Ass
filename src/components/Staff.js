import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Navbar, Table } from 'react-bootstrap';
import { useAdminContext } from './Context';
import Navigationbar from './Navigationbar';
import { useNavigate } from 'react-router-dom';

const Staff = () => {
  const { users, setUsers } = useAdminContext();  // Access state and update function
  const [newUserName, setNewUserName] = useState('');

  // Add new user to the list
  const handleAddUser = () => {
    const newUser = { id: Math.random().toString(36).substr(2, 9), name: newUserName };
    setUsers([...users, newUser]);
    setNewUserName('');  // Clear input field
  };

  const navigate = useNavigate()
   const handleLogout = () =>{
    navigate('/LoginPage ')
  }

  return (
    <>
    <Navbar className="nav-style mb-5" expand="lg">
      <Container >
        <Navbar.Brand className='text-center'  href="/"><Button className='' variant="outline-danger" onClick={handleLogout}>Log Out</Button></Navbar.Brand>
      </Container>
    </Navbar>
    <div className="container">    
      <h1 className='mb-5'>Users&nbsp;</h1>
      <input
        type="text"
        value={newUserName}
        className='rounded border-0 p-2'
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <Button onClick={handleAddUser} className="ms-2">Add User</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default Staff;
