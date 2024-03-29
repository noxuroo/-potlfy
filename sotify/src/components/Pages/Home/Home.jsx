import React, { useState } from 'react'
import LeftBotBar from './LeftBotBar/LeftBotBar'
import LeftTopBar from './LeftTopBar/LeftTopBar'
import RightBar from './RightBar/RightBar'
import style from './Home.module.css'

const Home = () => {

  const [leftBarDefault, setLeftBarHidden] = useState(false);

  return (
    <div className={style.skin}>
      <div className={style.leftBar} style={{width:leftBarDefault?'4vw':''}}>
      <LeftTopBar />
      <LeftBotBar leftBarDefault={setLeftBarHidden} currentStateLeftBarDefault={leftBarDefault}/>
      </div>
      <RightBar leftBarDefault={leftBarDefault}/>
    </div>
  )
}

export default Home