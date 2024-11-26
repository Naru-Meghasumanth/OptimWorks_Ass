import React from 'react';
import { useAdminContext } from './Context';  // Import the custom hook
import Navigationbar from './Navigationbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { users, roles, permissions } = useAdminContext();  // Access the state from context

  return (
    <>
    <Navigationbar />
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      <div className="row">
        <div className="col-md-4 mb-5 ">
          <div className="card user-card">
            <div className="card-body">
            <Link  className="nav-link" to="/users">
              <h5 className="card-title">Users</h5>
              <p className="card-text">{users.length} Users</p>
            </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card user-card">
            <div className="card-body">
              <Link className="nav-link" to="/roles">
                <h5 className="card-title">Roles</h5>
                <p className="card-text">{roles.length} Roles</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <div className="card user-card">
            <div className="card-body">
              <Link className='nav-link' to="/permissions">
                <h5 className="card-title">Permissions</h5>
                <p className="card-text">{permissions.length} Permissions</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;

