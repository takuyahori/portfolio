import React from 'react';
import firstViewImg from "../images/23842768_s.jpg";


const FirstView = () => {
  return (
    <div className='firstView'>
        <div className='firstView__img' style={{
            backgroundImage: `url(${firstViewImg})`}}>
        </div>
    </div>
  )
}

export default FirstView