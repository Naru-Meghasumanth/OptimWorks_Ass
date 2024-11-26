import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './components/Context';  // Import the AdminProvider
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Roles from './components/Roles';
import Permissions from './components/Permissions';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Staff from './components/Staff';


function App() {
  return (
    <div className='bg-dark app-body'>
    <AdminProvider>  {/* Wrap your app with the AdminProvider */}
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="">
              <LoginPage />
            </div>
          } />
          <Route path='/staff' element={<Staff/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </Router>
    </AdminProvider>
    </div>
  );
}

export default App;
