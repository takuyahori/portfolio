import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring';

const title = ["P", "r", "o", "f", "i", "l", "e"];
const config = { mass: 5, tension: 800, friction: 200 };

const Aboutpage = () => {

  const [ toggle, setToggle ] = useState(true);
  const trail = useTrail(title.length, {
    config,
    opacity: toggle ? 1 : 0,
    from: { opacity : 0 }
  });

  return (
    <section className="about" onLoad={() => setToggle(toggle => !toggle)}>
      <div className='line'></div>
      <div className='inner'>
        <h2 className='about__title'>
          {trail.map(({ ...rest }, index) => (
            <animated.span
              key={title[index]}
              className="firstView__title"
              style={{
                ...rest
              }}
            >{title[index]}
            </animated.span>
          ))}
        </h2>
        <div className='about__content'>
          <div className='about__detail'>
            <h3>Introduction</h3>
            <p>
              1993年生まれ東京都在住。駒澤大学を卒業後、専門商社にて営業を経験し、Web広告代理店へ転職。
              その後パーソナルトレーとして転職し独立。トレーナーというオフラインの仕事をしていく中でコロナ
              ウイルスが蔓延。オンラインで何かスキルをつけたいと思いTECH CAMPへ入校。スクールではバックエンドを
              勉強していたが、目に見える部分を実装できるフロントエンドにはまり、現在はKYOKYU株式会社にて
              フロントエンドエンジニアとし活動。

            </p>
          </div>
          <div className='about__detail'>
            <h3>Information</h3>
            <p>
              所属　：　KYOKYU株式会社
            </p>
            <p>
              所在地　：　東京都渋谷区
            </p>
            <p>
              出身・居住地　：　東京都品川区出身、育ち。現在は大田区大森に居住。
            </p>
            <p>
              最終学歴　：　駒澤大学経済学部経済学科
            </p>
            <p>
              開発スキル　：　ー　言語<br/>
              　　　　　　　　HTML　/　CSS　/　Javascript<br/>
              <br/>
              　　　　　　　　ー　Webアプリケーションフレームワーク<br/>
              　　　　　　　　Ruby on Rails　/　React.js（学習中）　/　jQuery<br/>
              <br/>
              　　　　　　　　ー　コミュニケーション<br/>
              　　　　　　　　slack　/　Backlog　/　Github<br/>
            </p>
            <p>
              趣味・特技　：　ー　筋トレ<br/>
              　　　　　　　　ー　サウナ<br/>
              　　　　　　　　ー　ボディビル<br/>
              　　　　　　　　ー　食事管理<br/>
              　　　　　　　　ー　飲酒<br/>
              　　　　　　　　ー　サーフィン<br/>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutpage