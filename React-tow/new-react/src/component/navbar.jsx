import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import "../css/navbar.css";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menuToggle, setMenutoggle] = useState(true);
  const toggleMenu=()=>{
    setMenutoggle(!menuToggle);
  }
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-wrapper">
          <h1 className="font-semibold">W&M Movie</h1>
        </div>
        <FaBars className="menu-icon space-x-1" onClick={toggleMenu} />
        {menuToggle && (
          <ul className="nav-ul">
            <FaXmark className="faxmark" onClick={toggleMenu}/>
            <Link to={"/home"}>
              <li className="nav-item">Home</li>
            </Link>
            <Link to={"/"}>
              <li className="nav-item">Movie</li>
            </Link>
            <Link to={"/about"}>
              <li className="nav-item">About</li>
            </Link>
            <Link to={"/contact"}>
              <li className="nav-item">Contact</li>
            </Link>
            <Link to={"/login"}>
              <li className="nav-item">Login</li>
            </Link>
          </ul>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
