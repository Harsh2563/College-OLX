import React from 'react'
import '../pages/profilePage.css'

export default function Nav() {
  return (
    <div>
        <section className="nav">
      <div className="logo">SwapSqaure</div>

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" for="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <form>
            <input type="text" className="searchBar" placeholder="Search Here" />
          </form>
        </li>
        <li>Home</li>
        <li>About</li>
        <li>
          <img
            src="../src/assets/profileImg.jpeg"
            className="profile-avatar"
            alt=""
          />
        </li>
      </ul>
    </section>
    </div>
  )
}
