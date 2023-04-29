import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/user-service';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    const authToken = await UserService.verifyUser(username, password);
    console.log(authToken);

    if (authToken) {
      localStorage.setItem('authToken', authToken);
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
