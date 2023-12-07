import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import Auth from './Auth';

export default function SignIn() {
  return (
    <div>
      <div className="wrapper">
        <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972206/College%20OLX/Login_img_rrwd4a.webp" alt="Picture" className="Picture" />
        <div className="signUpPage">
          <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972199/College%20OLX/Google_logo_b9hb2w.webp" alt="logo" id="logo" />
          <h1 className="welcomeHeading">Welcome Back!</h1>
          <h2 className="enterDetails">Please enter your details</h2>
          <form action="" className="SignUpForm">
            <input type="email" className="SignUpEmail" placeholder="Email" />
            <input type="password" className="SignUpPassword" placeholder="Password" />
            <button className="SignUpButton" type="submit">Login</button>
            <Auth />
          </form>
          <h3 className="signUpRedirect">Don't have an account? <Link to={'/sign-up'}  className="signUpBtn">Sign Up</Link></h3>
        </div>
      </div>
    </div>
  );
}
