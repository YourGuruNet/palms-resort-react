import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./Navbar.css";

function Navbar() {
  // const value for nav bar i
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const for onClick function
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //This function gives true or false value depended by screen size and returns mobile view if its true
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //This react function clear showButton so it does not pop up again
  useEffect(() => {
    showButton();
}, [])

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Palms &nbsp; <i className="fas fa-umbrella-beach" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-minus-circle" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/* I have a <i/> with the class as function on click class name change and return different icon
I use useState to make const for click and set it to false sou that's mean, that our menu button default is false
 handleClick returns opposite value if it was false then after click its return true..*/