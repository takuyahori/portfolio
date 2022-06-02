import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>Portfolio</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>        
                </li>
                <li>
                    <a href="#">About</a>        
                </li>
                <li>
                    <a href="#">Products</a>        
                </li>
                <li>
                    <a href="#">Contact</a>        
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header