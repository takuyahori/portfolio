import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';
import firstViewImg from "../images/23842768_s.jpg";

const title = ["T", "a", "k", "u", "y", "a", " ", "H", "o", "r", "i", "'", "s", " ", "P", "o", "r", "t", "f", "o", "r", "i", "o"];
const config = { mass: 5, tension: 800, friction: 200 };

const HomePage = () => {

  const [ toggle, setToggle ] = useState(true);
  const trail = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    from: { opacity : 0 }
  });

  return (
    <div className='firstView' onLoad={() => setToggle(state => !state)}>
        <div className='firstView__img' style={{
            backgroundImage: `url(${firstViewImg})`}}>
            <h1 className='firstView__text'>
              {trail.map(({ ...rest }, index) => (
                <animated.span
                  key={title[index]}
                  className="firstView__title"
                  style={{
                    ...rest
                  }}
                >
                  <animated.span>{title[index]}</animated.span>
                </animated.span>
              ))}
            </h1>
        </div>
    </div>
  )
}

export default HomePage