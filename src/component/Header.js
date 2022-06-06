import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>Portfolio</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>        
                </li>
                <li>
                    <Link to="/about">About</Link>     
                </li>
                <li>
                    <Link to="/products">Products</Link>        
                </li>
                <li>
                    <Link to="/contact">Contact</Link> 
                </li>
                <li>
                    <a href="https://github.com/takuyahori"><i className="fa-brands fa-github"></i></a> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header