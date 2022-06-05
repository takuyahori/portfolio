import React from 'react'
import portfolio from "../images/B7C1F42A-60AF-4FCC-8FB4-BB72302B9688.jpeg";
import comingSoon from "../images/3504665_s.jpg";

const ProductsPage = () => {
  return (
    <section className='product'>
      <div className='line'></div>
      <div className='inner'>
        <div className='product__title'>
          <h2>Product List</h2>
        </div>
        <div className='product__wrap'>
          <ul className='product__list'>
            <li>
              <a href="/">
                <img src={portfolio} alt=""></img>
              </a>
              <p>Portfolio site</p>
            </li>
            <li>
              <a href="#">
                <img src={comingSoon} alt=""></img>
              </a>
              <p>Coming soon...</p> 
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProductsPage