import React, { useState } from 'react'
import style from './Svg.module.css'

const Svg = ({ svgDefault, svgHover }) => {

    const [svgCode, setSvgCode] = useState(svgDefault)

    return (
        <div
            className={style.svg}
            dangerouslySetInnerHTML={{ __html: svgCode }}
            onMouseLeave={() => {setSvgCode(svgDefault)}}
            onMouseOver={() => {setSvgCode(svgHover)}}
        />
    )
}

export default Svg