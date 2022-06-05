import React from 'react'

const Aboutpage = () => {
  return (
    <section className="about">
      <div className='line'></div>
      <div className='inner'>
        <div className='about__title'>
          <h2>Profile</h2>
        </div>
        <div className='about__content'>
          <div className='about__detail'>
            <h3>Introduction</h3>
            <p>
              1993年生まれ東京都在住。現在はKYOKYU株式会社にてフロントエンドエンジニアとし活動。
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
              　　　　　　　　Ruby on Rails　/　React（学習中）　/　jQuery<br/>
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