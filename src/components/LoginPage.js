import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const LoginPage = () => {
  const [logdetails, setLogdetails] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const credentials = {
    username: 'sumanth',
    password: 'sumanth',
    staffuser: 'sumanth',
    staffpwd: 'vendor',
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      logdetails.username === credentials.username &&
      logdetails.password === credentials.password &&
      text === 'User'
    ) {
      navigate('/Product');
    } else if (
      logdetails.username === credentials.staffuser &&
      logdetails.password === credentials.staffpwd &&
      text === 'Vendor'
    ) {
      navigate('/vendordashboard');
    } else {
      alert('Invalid login credentials or Select the Role ');
    }
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="w-100 bg-primary empty-nav">
        <h1 className="text-light text-center pt-2">
          Secure Gateway Services
        </h1>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center log-height">
        <div className="text-center mb-5 btn-div log-text">
          <Button
            className="btn btn-outline-info bg-dark log-text"
            onClick={() => setText('User')}
          >
            User
          </Button>
          <Button
            className="btn btn-outline-warning bg-dark"
            onClick={() => setText('Vendor')}
          >
            Vendor
          </Button>
        </div>
        <h2 className="text-center mb-5 text-dark">
          {text} Login
        </h2>
        <Form onSubmit={submitHandler} className="bg-light bg-gradient bg-opacity-25 p-4 form-div rounded-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mb-0 text-dark">
              <b>
                {text} name
              </b>
            </Form.Label>
            <Form.Control
              className="input-field mb-3 text-dark border-end-0 border-top-0 border-start-0 rounded-top"
              type="text"
              placeholder="Enter username"
              value={logdetails.username}
              onChange={(e) =>
                setLogdetails({ ...logdetails, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="mb-0 text-dark">
              <b>Password</b>
            </Form.Label>
            <Form.Control
              className="input-field border-end-0 border-top-0 border-start-0 rounded-top"
              type="password"
              placeholder="Password"
              value={logdetails.password}
              onChange={(e) =>
                setLogdetails({ ...logdetails, password: e.target.value })
              }
            />
          </Form.Group>
          <Button variant="primary" className="mt-3" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
