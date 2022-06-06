import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [ active, setActive ] = useState(false);

  const classToggle = () => {
      setActive(!active)
  };

  return (
    <header>
        <div className='header__logo'>
            <i className="fa-solid fa-dumbbell"></i>
        </div>

        <nav className='header__nav'>
            <ul className={active ? "is-active" : ""}>
                <li className={active ? "is-active" : ""}>
                    <Link to="/">Home</Link>        
                </li>
                <li className={active ? "is-active" : ""}>
                    <Link to="/about">About</Link>     
                </li>
                <li className={active ? "is-active" : ""}>
                    <Link to="/products">Products</Link>        
                </li>
                <li className={active ? "is-active" : ""}>
                    <Link to="/contact">Contact</Link> 
                </li>
                <li className={active ? "is-active" : ""}>
                    <a href="https://github.com/takuyahori"><i className="fa-brands fa-github"></i></a> 
                </li>
            </ul>
            <div className='header__burger' onClick={classToggle}>
                <div className='header__burger--line1'></div>
                <div className='header__burger--line2'></div>
                <div className='header__burger--line3'></div>
            </div>
        </nav>
    </header>
  )
}

export default Header