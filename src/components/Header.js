import React, { useState } from 'react'
import appLogo from "../Images/appLogo.jpg"
import { Link } from 'react-router-dom';
const Header = () => {
  const [btn,setBtn] = useState("Login");
  return (
    <div className='header'>
      <div className='logo'>
        <img src={appLogo} alt=""  />
      </div>
      <div className='nav-items'>
        <ul>
        <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
          <li>Cart</li>
          <button
              className="px-4"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
        </ul>

      </div>

    </div>
  )
}

export default Header