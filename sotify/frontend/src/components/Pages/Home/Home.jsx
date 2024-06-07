import React, { useState } from 'react'
import LeftBotBar from './LeftBotBar/LeftBotBar'
import LeftTopBar from './LeftTopBar/LeftTopBar'
import RightBar from './RightBar/RightBar'
import style from './Home.module.css'

const Home = () => {
  const [leftBarDefault, setLeftBarHidden] = useState(false);
  const [contentData, setContentData] = useState({
    type: 0,
  });
  console.log(contentData)
  return (
    <div className={style.skin}>
      <div className={style.leftBar} style={{ width: leftBarDefault ? '4vw' : '' }}>
        <LeftTopBar currentStateLeftBarDefault={leftBarDefault} />
        <LeftBotBar leftBarDefault={setLeftBarHidden} setContentData={setContentData} currentStateLeftBarDefault={leftBarDefault} />
      </div>
      <RightBar leftBarDefault={leftBarDefault} data={contentData}/>
    </div>
  )
}

export default Home