import React from 'react'
import SvgTxt from '../../../UI/SvgTxt/SvgTxt'
import style from './LeftTopBar.module.css'
import EverySvgs from '../../../../svgData'

const LeftTopBar = () => {

  return (

    <div className={style.skin}>
      <div className={style.SvgTxtHome}>
        <SvgTxt
          txt='Home'
          fontSize='min(1.04167vw, 1.85185vh)'
          svgComp={EverySvgs['Home']['Default']}
          svgCompOnFocus={EverySvgs['Home']['Focus']}
          svgCompOnHover={EverySvgs['Home']['Hover']}
          key='svgTxtLeftTopBarHome'
        />
      </div>
      <div className={style.SvgTxtSearch}>
        <SvgTxt
          txt='Search'
          fontSize='min(1.04167vw, 1.85185vh)'
          svgComp={EverySvgs['Search']['Default']}
          svgCompOnFocus={EverySvgs['Search']['Hover']}
          svgCompOnHover={EverySvgs['Search']['Hover']}
          key='svgTxtLeftTopBarSearch'
        />
      </div>
    </div>
  )
}

export default LeftTopBar
