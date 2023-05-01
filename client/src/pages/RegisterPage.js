/*
Register page. The user is created with the call to back end, and is
redirected to /login.
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/user-service';
import './LoginPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); 

  const handleRegistration = async (event) => {
    event.preventDefault();

    const authToken = await UserService.createUser(username, password);

    if (authToken) {
      setToken(authToken);
      navigate('/login');
      alert('User created');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <div className="login-page">
        <h1>Where2Eat.com</h1>
        <div className='form-container'>
      <form onSubmit={handleRegistration}>
      <h2>Register</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <br />
        <p>Already registered? <a href="/login">Click here</a></p>
        </div>
    </div>
  );
}

export default RegisterPage;
