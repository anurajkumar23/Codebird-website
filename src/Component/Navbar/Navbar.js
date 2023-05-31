import React from 'react'
import "./navbar.css"
import Logo from "../images/logo.png"
import { Icon } from '@iconify/react';



/* eslint-disable no-restricted-globals */
/*=============== SHOW MENU ===============*/
// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//           nav = document.getElementById(navId)
 
//     toggle.addEventListener('click', () =>{
//         // Agregar clase show-menu a nav menu
//         nav.classList.toggle('show-menu')
//         // Agregar show-icon para mostrar y ocultar el icono del menú
//         toggle.classList.toggle('show-icon')
//     })
//  }
 
//  showMenu('nav-toggle','nav-menu')
 
//  /*=============== SHOW DROPDOWN MENU ===============*/
//  const dropdownItems = document.querySelectorAll('.dropdown__item')
 
//  // 1. Selecionar cada dropdown item
//  dropdownItems.forEach((item) =>{
//      const dropdownButton = item.querySelector('.dropdown__button') 
 
//      // 2. Selecionar cada click del botón
//      dropdownButton.addEventListener('click', () =>{
//          // 7. Seleccionar la clase show-dropdown actual
//          const showDropdown = document.querySelector('.show-dropdown')
         
//          // 5. Llamar a la funcion toggleItem
//          toggleItem(item)
 
//          // 8. Remover la clase show-dropdown de otros items
//          if(showDropdown && showDropdown!== item){
//              toggleItem(showDropdown)
//          }
//      })
//  })
 
//  // 3. Crear una función para mostrar el dropdown
//  const toggleItem = (item) =>{
//      // 3.1. Selecionar cada dropdown content
//      const dropdownContainer = item.querySelector('.dropdown__container')
 
//      // 6. Si el mismo item contiene la clase show-dropdown, remover
//      if(item.classList.contains('show-dropdown')){
//          dropdownContainer.removeAttribute('style')
//          item.classList.remove('show-dropdown')
//      } else{
//          // 4. Agregar el height maximo al dropdown content y agregar la clase show-dropdown
//          dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
//          item.classList.add('show-dropdown')
//      }
//  }
 
//  /*=============== DELETE DROPDOWN STYLES ===============*/
//  const mediaQuery = matchMedia('(min-width: 1118px)'),
//        dropdownContainer = document.querySelectorAll('.dropdown__container')
 
//  // Función para eliminar estilos desplegables en modo móvil cuando el navegador cambia de tamaño
//  const removeStyle = () =>{
//      // Validar si la media query llega a 1118px
//      if(mediaQuery.matches){
//          // Removemos el estilo de height de dropdown container
//          dropdownContainer.forEach((e) =>{
//              e.removeAttribute('style')
//          })
 
//          // Removemos la clase show-dropdown de dropdown item
//          dropdownItems.forEach((e) =>{
//              e.classList.remove('show-dropdown')
//          })
//      }
//  }
 
//  addEventListener('resize', removeStyle)

 
const Navbar = () => {
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
    
                    <div className="nav__toggle" id="nav-toggle">
                        <Icon icon="ri:menu-line nav__toggle-menu"/> 
                        <Icon icon="ri:close-line nav__toggle-close"/> 
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
