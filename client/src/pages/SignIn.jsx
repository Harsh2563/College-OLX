import React,{useState} from 'react';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../components/Auth';
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/User/userslice';

export default function SignIn() {
const [formData, setformData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handleSubmit = async(e)=> {
  e.preventDefault();
  setformData({
    ...formData,
    [e.target.id]:e.target.value,
  });
  try {
    dispatch(loginStart());
    const res = await fetch('/api/user/auth/signIn', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json();
    console.log(data);
    if(data.success==false) {
      loginFailure(data);
      return;
    }
    dispatch(loginSuccess(data));
    navigate('/');
  } catch (error) {
    dispatch(loginFailure(error));
  }
}

  return (
    <div>
      <div className="wrapper">
        <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972206/College%20OLX/Login_img_rrwd4a.webp" alt="Picture" className="Picture" />
        <div className="signUpPage">
          <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972199/College%20OLX/Google_logo_b9hb2w.webp" alt="logo" id="logo" />
          <h1 className="welcomeHeading">Welcome Back!</h1>
          <h2 className="enterDetails">Please enter your details</h2>
          <form action="" className="SignUpForm" onSubmit={handleSubmit}>
            <input type="email" className="SignUpEmail" id='email' placeholder="Email" />
            <input type="password" className="SignUpPassword" id='password' placeholder="Password" />
            <button className="SignUpButton" type="submit" onSubmit={handleSubmit}>Login</button>
            <Auth />
          </form>
          <h3 className="signUpRedirect">Don't have an account? <Link to={'/sign-up'}  className="signUpBtn">Sign Up</Link></h3>
        </div>
      </div>
    </div>
  );
}
