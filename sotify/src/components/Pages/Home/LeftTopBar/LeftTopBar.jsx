import React from 'react'
import SvgTxt from '../../../UI/SvgTxt/SvgTxt'
import style from './LeftTopBar.module.css'
import EverySvgs from '../../../../svgData'
import Svg from '../../../UI/Svg/Svg'

const LeftTopBar = ({ currentStateLeftBarDefault }) => {
  return (

    <div className={style.skin}>
      {currentStateLeftBarDefault
        ? <div className={style.svgtxtcont}>
          <Svg
            svgDefault={EverySvgs['Home']['Default']}
            svgFocus={EverySvgs['Home']['Focus']}
            svgHover={EverySvgs['Home']['Hover']}
          />
        </div>
        :
        <div className={style.SvgTxtHome}>
          <SvgTxt
            txt='Home'
            fontSize='min(1.04167vw, 1.85185vh)'
            svgComp={EverySvgs['Home']['Default']}
            svgCompOnFocus={EverySvgs['Home']['Focus']}
            svgCompOnHover={EverySvgs['Home']['Hover']}
            key='svgTxtLeftTopBarHome'
          />
        </div>}

      {currentStateLeftBarDefault
        ? <div className={style.svgtxtcont}>
          <Svg
            svgDefault={EverySvgs['Search']['Default']}
            svgFocus={EverySvgs['Search']['Focus']}
            svgHover={EverySvgs['Search']['Hover']}
          />
        </div>
        :
        <div className={style.SvgTxtSearch}>
          <SvgTxt
            txt='Search'
            fontSize='min(1.04167vw, 1.85185vh)'
            svgComp={EverySvgs['Search']['Default']}
            svgCompOnFocus={EverySvgs['Search']['Hover']}
            svgCompOnHover={EverySvgs['Search']['Hover']}
            key='svgTxtLeftTopBarSearch'
          />
        </div>}
    </div>
  )
}

export default LeftTopBar
