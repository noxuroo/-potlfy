import React from 'react'
import SvgTxt from '../../../UI/SvgTxt/SvgTxt'
import style from './LeftBotBar.module.css'
import EverySvgs from '../../../../svgData'
import Svg from '../../../UI/Svg/Svg'
import MusicPlate from '../../../UI/MusicPlate/MusicPlate'
import Music from '../../../../musicData'

const LeftBotBar = ({ leftBarDefault, currentStateLeftBarDefault }) => {
const MusicPlates = Music.map(element=><div className={style.MusicPlatesLimit}><MusicPlate data={element}/></div>)
  return (
    <div className={style.skin}>
      {currentStateLeftBarDefault
        ? <div className={style.svgtxtcont}>
          <Svg
            svgDefault={EverySvgs['YourLibrary']['DefaultExp']}
            svgHover={EverySvgs['YourLibrary']['HoverExp']}
            onClick={leftBarDefault}
            onClickState={currentStateLeftBarDefault}
          />
        </div>
        :
        <div className={style.SvgTxtYourLibrary}>
          <SvgTxt
            txt='Your Library'
            fontSize='min(1.04167vw, 1.85185vh)'
            svgComp={EverySvgs['YourLibrary']['DefaultUnExp']}
            svgCompOnHover={EverySvgs['YourLibrary']['HoverUnExp']}
            key='svgTxtLeftBotBarYourLibrary'
            onClick={leftBarDefault}
            onClickState={currentStateLeftBarDefault}
          />
        </div>}
    {MusicPlates}

    </div>
  )
}

export default LeftBotBar