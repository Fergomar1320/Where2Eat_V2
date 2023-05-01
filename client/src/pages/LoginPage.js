/*
Login page. Created an item in localStorage named "authenticated", which checks if the 
user is currently logged in. Used in the restaurant page. Uses an auth token to verify
the user. More in back end.
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/user-service';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    const authToken = await UserService.verifyUser(username, password);

    if (authToken) {
      localStorage.setItem('authToken', authToken);
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate(`/main?username=${username}`);

    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
  }
  }   

  return (
    <div className="login-page">
      <h1>Where2Eat.com</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          <button type="submit">Login</button>
        </form>
        <br />
        <p>Not registered? <a href="/register">Click here</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
