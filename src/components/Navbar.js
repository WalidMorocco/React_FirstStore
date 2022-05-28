import React, {useContext} from 'react';
import ToggleSwitch from './ToggleSwitch';
import {ThemeContext, themes} from '../context/themeContext';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {  

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="app-container">
        <header className="nav" >
            <nav className="nav" style={{background: theme.background, color:theme.foreground}}>
                <Link to="/">Home</Link>
                <Link to="products">Products</Link>
            </nav>
        </header>
    </div>
  )
};

export default Navbar;