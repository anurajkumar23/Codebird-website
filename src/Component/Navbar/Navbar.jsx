import React from 'react';
import {useState}  from 'react';
import "./navbar.css";
import Logo from "../images/logo.png";
import "./assets/scss/styles.scss";

import { Icon } from '@iconify/react';


const Navbar = () => {
    
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);  
      };

  return (
    <div>
      <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                <div className="logo">
                <div className="logo_content">
                <img src={Logo} alt="Codebird Logo" />
                    <a href="#" className="nav__logo">
                         The CodeBird
                    </a>
                    </div>
                   </div>
                   <button class="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                   {isMenuVisible ? <i class="ri-menu-line nav__toggle-menu"></i> : <i class="ri-close-line nav__toggle-close"></i>}
                     </button>
                </div>

                {/* <!--=============== NAV MENU ===============--> */}
                <div id="nav-menu" className={isMenuVisible ? 'nav__menu' : ''} >
                    <ul className="nav__list">
                        <li>
                            <a href="#" className="nav__link">Home</a>
                        </li>

                        {/* <!--=============== DROPDOWN 1 ===============--> */}
                        <li className="dropdown__item">                      
                            <div className="nav__link dropdown__button">
                                About <Icon icon="ri:arrow-down-s-line" />
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:flashlight-line" />
                                        </div>
    
                                        <span className="dropdown__title">Codebird Team</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Current Team</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Founding Team</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Website creating team</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:heart-3-line" />
                                        </div>
    
                                        <span className="dropdown__title">Popular Domains</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Web development</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">App development</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">CP/DSA</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">ML/AI/DL</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:book-mark-line" />
                                        </div>
    
                                        <span className="dropdown__title">Careers Domain</span>
                                        
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Cybersecurity</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Blockchain/Web3</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Game development</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Hardware</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:file-paper-2-line" />
                                        </div>
    
                                        <span className="dropdown__title">Certifications</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">CodeBird Member certificates</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">CodeBird others certificates</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* <!--=============== DROPDOWN 2 ===============--> */}
                        <li className="dropdown__item">
                            <div className="nav__link dropdown__button">
                                Resources <Icon icon="ri:arrow-down-s-line" />
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="mdi:teacher" />
                                        </div>
    
                                        <span className="dropdown__title">Adviser</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">LinkedIn</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Facebook</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="guidance:study-room" />
                                        </div>
    
                                        <span className="dropdown__title">Study Material</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link"> Notes  </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Documentation</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Component </a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:apps-2-line" />
                                        </div>
    
                                        <span className="dropdown__title">Others</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Recent blogs</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Tutorial videos</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Webinar</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="nav__link">Events</a>
                        </li>

                        {/* <!--=============== DROPDOWN 3 ===============--> */}
                        <li className="dropdown__item">                        
                            <div className="nav__link dropdown__button">
                                FAQS <Icon icon="ri:arrow-down-s-line dropdown__arrow"/> 
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:community-line" />
                                        </div>
    
                                        <span className="dropdown__title">About us</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">About us</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Support</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                        <Icon icon="ri:shield-line" />
                                        </div>
    
                                        <span className="dropdown__title">Safety and quality</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Cookie settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        
        
    </div>
  )
}

export default Navbar
