import React, { useState } from 'react'
import portfolio from "../images/B7C1F42A-60AF-4FCC-8FB4-BB72302B9688.jpeg";
import comingSoon from "../images/3504665_s.jpg";
import { animated, useTrail } from 'react-spring';

const title = ["P", "r", "o", "d", "u", "c", "t", " ", "L", "i", "s", "t"];
const config = { mass: 5, tension: 800, friction: 200 };

const ProductsPage = () => {

  const [ toggle, setToggle ] = useState(true);
  const trail = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    from: { opacity : 0 }
  });

  return (
    <section className='product' onLoad={() => setToggle(toggle => !toggle)}>
      <div className='line'></div>
      <div className='inner'>
        <h2 className='product__title'>
          {trail.map(({ ...rest }, index) => (
            <animated.span
              key={index}
              style={{
                ...rest
              }}
            >{title[index]}
            </animated.span>
          ))}
        </h2>
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