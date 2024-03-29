import React from 'react'
import style from './RightBar.module.css'



const RightBar = ({leftBarDefault}) => {
  return (
    <div className={style.skin} style={{width:leftBarDefault?'94.5vw':''}}>RightBar</div>
  )
}

export default RightBar