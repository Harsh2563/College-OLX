import React from 'react'
import '../pages/App.css'
export default function Auth() {
const handleSubmit = ()=> {

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
