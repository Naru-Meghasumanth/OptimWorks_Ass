import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Navbars() {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Dashboard</Link>
    //     </li>
    //     <li>
    //       <Link to="/users">Users</Link>
    //     </li>
    //     <li>
    //       <Link to="/roles">Roles</Link>
    //     </li>
    //     <li>
    //       <Link to="/permissions">Permissions</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">RBAC</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
            <Link className="nav-item nav-link active" to="/">Dashboard</Link>
            <Link className="nav-item nav-link" to="/users">Users</Link>
            <Link className="nav-item nav-link" to="/roles">Roles</Link>
            <Link className="nav-item nav-link" to="/permissions">Permissions</Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbars;
