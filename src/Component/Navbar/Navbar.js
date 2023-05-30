import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <a href="#" className="nav__logo">
                        <i className="ri-code-s-slash-line"></i> The CodeBird
                    </a>
    
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-menu-line nav__toggle-menu"></i>
                        <i className="ri-close-line nav__toggle-close"></i>
                    </div>
                </div>

                {/* <!--=============== NAV MENU ===============--> */}
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li>
                            <a href="#" className="nav__link">Home</a>
                        </li>

                        {/* <!--=============== DROPDOWN 1 ===============--> */}
                        <li className="dropdown__item">                      
                            <div className="nav__link dropdown__button">
                                About <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-flashlight-line"></i>
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
                                            <i className="ri-heart-3-line"></i>
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
                                            <i className="ri-book-mark-line"></i>
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
                                            <i className="ri-file-paper-2-line"></i>
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
                                Resources <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-code-line"></i>
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
                                            <i className="ri-pen-nib-line"></i>
                                        </div>
    
                                        <span className="dropdown__title">Designs</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Web designs</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">App designs</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Component design</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-apps-2-line"></i>
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
                                Faqs <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-community-line"></i>
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
                                            <i className="ri-shield-line"></i>
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
