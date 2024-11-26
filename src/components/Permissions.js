import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import Navigationbar from './Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Permissions = () => {
  const [showModal, setShowModal] = useState(false);
  const [permissionDetails, setPermissionDetails] = useState({ id: '', name: '', description: '' });
  const [permissions, setPermissions] = useState([
    { id: '1', name: 'View Dashboard', description: 'Allows viewing the dashboard' },
    { id: '2', name: 'Edit Users', description: 'Allows editing users' },
    { id: '3', name: 'Manage Roles', description: 'Allows managing roles' },
  ]);

  // Function to open modal for adding or editing permission
  const handleAddPermission = () => {
    setPermissionDetails({ id: '', name: '', description: '' }); // Reset form
    setShowModal(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (permissionDetails.id) {
      // If an ID exists, we're editing an existing permission
      const updatedPermissions = permissions.map(permission => permission.id === permissionDetails.id ? permissionDetails : permission);
      setPermissions(updatedPermissions);
    } else {
      // Otherwise, we're adding a new permission
      const newPermission = { ...permissionDetails, id: Math.random().toString(36) };
      setPermissions([...permissions, newPermission]);
    }
    setShowModal(false); // Close modal after submission
  };

  // Function to handle editing a permission
  const handleEditPermission = (permission) => {
    setPermissionDetails(permission);
    setShowModal(true);
  };

  // Function to handle deleting a permission
  const handleDeletePermission = (permissionId) => {
    const filteredPermissions = permissions.filter(permission => permission.id !== permissionId);
    setPermissions(filteredPermissions);
  };

  const navigate = useNavigate()
  const returnHandler = () =>{
    navigate('/Dashboard')
  }

  return (
    <>
    <Navigationbar />
    <div className="container mt-5">
    <h1 className='mb-5'>Permissions&nbsp;
      <button className='btn btn-outline-secondary margin-btn' onClick={returnHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
        </svg>
      </button><br/>
      </h1>
    <Button className='margin-btn' variant="primary" onClick={handleAddPermission}>Add Permission</Button>
      
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <Button variant="warning" className="me-2 mb-2 mb-lg-0" onClick={() => handleEditPermission(permission)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeletePermission(permission.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Add/Edit Permission */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{permissionDetails.id ? 'Edit Permission' : 'Add Permission'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="permissionName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter permission name"
                value={permissionDetails.name}
                onChange={(e) => setPermissionDetails({ ...permissionDetails, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="permissionDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter permission description"
                value={permissionDetails.description}
                onChange={(e) => setPermissionDetails({ ...permissionDetails, description: e.target.value })}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {permissionDetails.id ? 'Update Permission' : 'Add Permission'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
};

export default Permissions;
