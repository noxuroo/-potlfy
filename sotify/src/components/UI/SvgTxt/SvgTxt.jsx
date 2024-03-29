import React, { useState } from 'react'
import style from './SvgTxt.module.css'

const SvgTxt = ({ txt, fontSize, svgComp, svgCompOnHover, key, onClick, onClickState}) => {

    const [svgDivColor, setSvgDivColor] = useState('#b3b3b3')
    const [svgCode, setSvgCode] = useState(svgComp)

    return (
        <div key={key}
            className={style.skin}
            onMouseOver={
                () => {
                    setSvgDivColor('white');
                    setSvgCode(svgCompOnHover)
                }
            }
            onMouseLeave={
                () => {
                    setSvgDivColor('#b3b3b3')
                    setSvgCode(svgComp)
                }
            }
            onClick={
                () => {
                    onClick(!onClickState)
                }
            }

        >
            <div className={style.svg}
                dangerouslySetInnerHTML={{ __html: svgCode }}
            />
            <h1
                className={style.txt}
                style={{ fontSize, color: svgDivColor }}
            >
                {txt}
            </h1>
        </div>
    )
}

export default SvgTxt