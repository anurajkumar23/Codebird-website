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
                                Discover <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                            </div>

                            <div className="dropdown__container">
                                <div className="dropdown__content">
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-flashlight-line"></i>
                                        </div>
    
                                        <span className="dropdown__title">Most viewed courses</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">HTML for beginners</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Advanced CSS</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">JavaScript OOP</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-heart-3-line"></i>
                                        </div>
    
                                        <span className="dropdown__title">Popular courses</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Development with Flutter</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Web development with React</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Backend development expert</a>
                                            </li>
                                        </ul>
                                    </div>
    
                                    <div className="dropdown__group">
                                        <div className="dropdown__icon">
                                            <i className="ri-book-mark-line"></i>
                                        </div>
    
                                        <span className="dropdown__title">Careers</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Web development</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Applications development</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">UI/UX design</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Informatic security</a>
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
                                                <a href="#" className="dropdown__link">Course certificates</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Free certifications</a>
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
    
                                        <span className="dropdown__title">Web templates</span>
    
                                        <ul className="dropdown__list">
                                            <li>
                                                <a href="#" className="dropdown__link">Free templates</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown__link">Premium templates</a>
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
                            <a href="#" className="nav__link">Pricing</a>
                        </li>

                        {/* <!--=============== DROPDOWN 3 ===============--> */}
                        <li className="dropdown__item">                        
                            <div className="nav__link dropdown__button">
                                Company <i className="ri-arrow-down-s-line dropdown__arrow"></i>
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
