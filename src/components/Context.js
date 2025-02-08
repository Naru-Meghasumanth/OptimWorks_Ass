import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

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

  return (
    <AdminContext.Provider
      value={{ users, setUsers, roles, setRoles, permissions, setPermissions }}
    >
      {children}
    </AdminContext.Provider>
  );
};
