import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from './../../image/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Header() {

   const [toggle, setToggle] = useState(false);

   const toggleMenu = () => {
      setToggle(!toggle);
   }

   const [width, setWidth] = useState(0);
   function reportWindowSize() {
      setWidth(window.innerWidth);
      if (width > 768) {
         setToggle(false);
      }
   }
   window.onresize = reportWindowSize;

   window.onscroll = function () {
      if (document.documentElement.scrollTop > 10) {
         document.getElementById("btn_back_to_top").style.opacity = '1';
      } else {
         document.getElementById("btn_back_to_top").style.opacity = '0';
      }
   };

   const backToTop = () => {
      document.documentElement.scrollTop = 0;
   }

   return (
      <div className="header">
         <div className="wp_container wrapper_container">
            <Link to="/" onClick={() => setToggle(false)}>
               <img className="header__icon" src={logo} alt="" />
            </Link>
            <div id="menu">
               <ul>
                  <li>
                     <a href="#solution">
                        Solution
                     </a>
                  </li>
                  <li>
                     <a href="#feature">
                        Feature
                     </a>
                  </li>
                  <li>
                     <a href="#team">
                        Team
                     </a>
                  </li>
                  <li>
                     <a href="#blog">
                        Blog
                     </a>
                  </li>
                  <li>
                     <a href="#price">
                        Price
                     </a>
                  </li>
               </ul>
            </div>
            <div id="btn">
               <Link to="/SignIn" id="signIn">
                  Sign In
               </Link>
               <Link to="/SignUp" id="signUp" variant="contained" color="primary">
                  Sign Up
               </Link>
               {toggle ?
                  <CloseIcon onClick={toggleMenu} className="menu__icon" />
                  : <MenuIcon onClick={toggleMenu} className="menu__icon" />}
            </div>

            <div id="toggle_menu" onClick={toggleMenu} className={`${toggle ? "display_menu" : ""}`}>
               <ul>
                  <li>
                     <Link to="">Solutions</Link>
                  </li>
                  <li>
                     <Link to="">Team</Link>
                  </li>
                  <li>
                     <Link to="">Price</Link>
                  </li>
                  <li>
                     <Link to="">Feature</Link>
                  </li>
                  <li>
                     <Link to="/SignIn">
                        Sign In
                     </Link>
                  </li>

                  <li>
                     <Link to="/SignUp">
                        <Button variant="contained" color="primary" disableElevation>
                           Sign Up
                        </Button>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <button onClick={backToTop} id="btn_back_to_top">
            <ArrowUpwardIcon />
         </button>
      </div >
   )
}

export default Header;
