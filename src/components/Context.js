import React, { createContext, useContext, useState } from 'react';

// Create a context
const AdminContext = createContext();

// Custom hook to use the AdminContext
export const useAdminContext = () => {
  return useContext(AdminContext);
};

// Provider component to wrap the application
export const AdminProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ]);

  const [roles, setRoles] = useState([
    { id: '1', name: 'Admin' },
    { id: '2', name: 'Editor' },
  ]);

  const [permissions, setPermissions] = useState([
    { id: '1', name: 'View Dashboard' },
    { id: '2', name: 'Edit Users' },
  ]);

  // Provide state and functions to update state
  return (
    <AdminContext.Provider value={{ users, setUsers, roles, setRoles, permissions, setPermissions }}>
      {children}
    </AdminContext.Provider>
  );
};
