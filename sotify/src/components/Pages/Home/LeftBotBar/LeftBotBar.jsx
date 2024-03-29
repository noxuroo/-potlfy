import React from 'react'
import SvgTxt from '../../../UI/SvgTxt/SvgTxt'
import style from './LeftBotBar.module.css'
import EverySvgs from '../../../../svgData'
import Svg from '../../../UI/Svg/Svg'

const LeftBotBar = ({ leftBarDefault, currentStateLeftBarDefault }) => {
  return (
    <div className={style.skin}>
      {currentStateLeftBarDefault
        ? <div className={style.svgtxtcont}>
          <Svg
            svgDefault={EverySvgs['YourLibrary']['DefaultExp']}
            svgHover={EverySvgs['YourLibrary']['HoverExp']}
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


    </div>
  )
}

export default LeftBotBar