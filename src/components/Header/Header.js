import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from './../../image/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
   return (
      <div className="header">
         <div className="wp_container wrapper_container">
            <Link to="/">
               <img className="header__icon" src={logo} alt="" />
            </Link>
            <div id="menu">
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
               </ul>
            </div>
            <div id="btn">
               <Link to="/SignIn" id="signIn">
                  Sign In
               </Link>
               <Link to="/SignUp" id="signUp" variant="contained" color="primary">
                  Sign Up
               </Link>
               <MenuIcon id="menu__icon"></MenuIcon>
            </div>
         </div>
      </div>
   )
}

export default Header;
