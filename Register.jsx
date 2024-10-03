import React from 'react';
import './Register.css'; // Importing the CSS file

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Registration</h1>
        
        <label htmlFor="uname">Your Name:</label>
        <input type="text" name="username" id="uname" placeholder="Your Name" />

        <label htmlFor="number">Phone Number:</label>
        <input type="tel" name="pn" id="number" placeholder="Phone Number" />

        <label htmlFor="pwd">Create Password:</label>
        <input type="password" name="pwd" id="pwd" placeholder="Create Password" />

        <label htmlFor="confirmPwd">Re-Enter your Password:</label>
        <input type="password" name="confirmPwd" id="confirmPwd" placeholder="Re-Enter Password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
