import React from 'react';
import './LoginForm.css';
import login_left from '../../assets/school_finder.jpg';

const LoginForm = () => {
  return (
    <div className="login-container">
        <div className='leftside_img'>
          <figure className='left_side'>
              <img src={login_left} alt="School Finder Banner"/>
          </figure>
        </div>
        <div className="login_form_right">
          <h1 className="login-title">Login & Signup</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Enter Mobile Number to Continue</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Please Enter Your Mobile Number"
              />
            </div>
            <button type="submit" className="login-button">
              Send OTP
            </button>
          </form>
        </div>
    </div>
  );
};

export default LoginForm