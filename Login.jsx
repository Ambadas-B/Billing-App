import React from 'react';
import './Login.css'; // Importing the CSS file

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <label htmlFor="uname">Username/Email:</label>
        <input type="text" name="username" id="uname" placeholder="Enter username/Email" />
        
        <label htmlFor="pswd">Password:</label>
        <input type="password" name="pwd" id="pswd" placeholder="Enter Password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
