import React from 'react'
import '../pages/App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/User/userslice';
import {app} from '../firebase'
export default function Auth() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
const handleSubmit = async(e)=> {
   e.preventDefault();
   try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth,provider);

      const res = await fetch('/api/user/auth/google',{
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
         }),
      });
      const data = await res.json();
      dispatch(loginSuccess(data));
      navigate('/');
   } catch (error) {
      console.log(error);
   }
}

  return (
     <div>
        <button 
        onClick={handleSubmit}
        className="GoogleSignUp">
                <img src="https://res.cloudinary.com/dge7dzxe0/image/upload/v1701972199/College%20OLX/Google_logo_b9hb2w.webp" alt="Google Logo" class="googleLogo" />
                Sign Up with Google
         </button>
     </div>
  )
}
