import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Auth from '../components/Auth';
import { useDispatch } from 'react-redux';
import { signUpFailure, signUpStart, signUpSuccess } from '../redux/User/userslice';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signUpStart());
      const res = await fetch('/api/user/auth/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signUpFailure(data));
        return;
      }
      dispatch(signUpSuccess(data));
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  };

  return (
    <div>
      <div className="wrapper">
        <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972206/College%20OLX/Login_img_rrwd4a.webp" alt="Picture" className="Picture" />
        <div className="signUpPage">
          <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972199/College%20OLX/Google_logo_b9hb2w.webp" alt="logo" id="logo" />
          <h1 className="welcomeHeading">Sign Up</h1>
          <h2 className="enterDetails">Create your account</h2>
          <form action="" className="SignUpForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="username"
              placeholder="Full Name"
              id="username" 
              onChange={handleChange}
            />
            <input
              type="email"
              className="SignUpEmail"
              placeholder="Email"
              id="email" 
              onChange={handleChange}
            />
            <input
              type="password"
              className="SignUpPassword"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button className="SignUpButton" type="submit">
              SignUp
            </button>
            <Auth />
          </form>
          <h3 className="signUpRedirect">
            Have an account? <Link to={'/sign-in'} href="" className="LoginBtn">Log In</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
