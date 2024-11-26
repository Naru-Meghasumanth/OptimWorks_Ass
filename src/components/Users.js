import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { Button, Table } from 'react-bootstrap';
import { useAdminContext } from './Context';
import Navigationbar from './Navigationbar';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { users, setUsers } = useAdminContext();  // Access state and update function
  const [newUserName, setNewUserName] = useState('');

  // Add new user to the list
  const handleAddUser = () => {
    const newUser = { id: Math.random().toString(36).substr(2, 9), name: newUserName };
    setUsers([...users, newUser]);
    setNewUserName('');  // Clear input field
  };

  const navigate = useNavigate()
  const returnHandler = () =>{
    navigate('/Dashboard')
  }


  return (
    <>
    <Navigationbar />
    <div className="container mt-5">
      <h1 className='mb-5  '>Users&nbsp;
      <button className='btn btn-outline-secondary  margin-btn' onClick={returnHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>
      </button><br/>
      </h1>
      <input
        type="text"
        className='rounded border-0 p-2'
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <Button onClick={handleAddUser} className="ms-2">Add User</Button>
      <Table striped bordered hover className="mt-3 field ">
        <thead >
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody >
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

export default Users;
