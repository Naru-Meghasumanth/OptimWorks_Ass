import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAdminContext } from './Context';
import Navigationbar from './Navigationbar';
import { useNavigate } from 'react-router-dom';

const Roles = () => {
  const { roles, setRoles } = useAdminContext();  // Access state and update function
  const [newRoleName, setNewRoleName] = useState('');

  // Add new role to the list
  const handleAddRole = () => {
    const newRole = { id: Math.random().toString(36).substr(2, 9), name: newRoleName };
    setRoles([...roles, newRole]);
    setNewRoleName('');  // Clear input field
  };

  const navigate = useNavigate()
  const returnHandler = () =>{
    navigate('/Dashboard')
  }

  return (
    <>
    <Navigationbar/>
    <div className="container mt-5">
      <h1 className='margin-btn mb-5'>Roles&nbsp;
      <button className='btn btn-outline-secondary' onClick={returnHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>
      </button>
      </h1>
       
      <input
        type="text"
        value={newRoleName}
        className='rounded border-0 p-2'
        onChange={(e) => setNewRoleName(e.target.value)}
        placeholder="Enter role name"
      />
      <Button onClick={handleAddRole} className="ms-2">Add Role</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  );
};

export default Roles;
