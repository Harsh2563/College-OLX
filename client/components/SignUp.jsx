import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import Auth from './Auth';

export default function SignUp() {
  return (
    <div>
      <div className="wrapper">
        <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972206/College%20OLX/Login_img_rrwd4a.webp" alt="Picture" className="Picture" />
        <div className="signUpPage">
          <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972199/College%20OLX/Google_logo_b9hb2w.webp" alt="logo" id="logo" />
          <h1 className="welcomeHeading">Sign Up</h1>
          <h2 className="enterDetails">Create your account</h2>
          <form action="" className="SignUpForm">
            <input type="text" className="username" placeholder="Full Name" />
            <input type="email" className="SignUpEmail" placeholder="Email" />
            <input type="password" className="SignUpPassword" placeholder="Password" />
            <button className="SignUpButton" type="submit">SignUp</button>
            <Auth />
          </form>
          <h3 className="signUpRedirect">Have an account? <Link to={'/sign-in'} href="" className="LoginBtn">Log In</Link></h3>
        </div>
      </div>
    </div>
  );
}
