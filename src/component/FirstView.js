import React from 'react';
import firstViewImg from "../images/23842768_s.jpg";


const FirstView = () => {
  return (
    <div className='firstView'>
        <div className='firstView__img' style={{
            backgroundImage: `url(${firstViewImg})`}}>
            <h1 className='firstView__text'>
                <span className='firstView__title'>Takuya Hori's Portfolio</span>
                <span className='firstView__desc'>Web Engineer</span>
            </h1>
        </div>
    </div>
  )
}

export default FirstView