import React, { useState } from "react";
import "../css/Header.css";
import Logo from "../images/coadbird.png";

function Header() {
  const [isNavActive, setNavActive] = useState(false);

  const handleHamburgerClick = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header>
      <div className="logo">
        <div className="logo_content">
          <img src={Logo} alt="Codebird Logo" />
          <h3>The CodeBird</h3>
        </div>
      </div>
      <div
        className={`hamburger ${isNavActive ? "is-active" : ""}`}
        onClick={handleHamburgerClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav_bar ${isNavActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/" className="home">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Advisor</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <div className="buttons">
              <button className="login">
                <span>
                  <i className="fa-solid fa-user"></i> Login
                </span>
              </button>
              <button className="register">
                <span>
                  <i className="fa-solid fa-user-plus"></i> Register
                </span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
