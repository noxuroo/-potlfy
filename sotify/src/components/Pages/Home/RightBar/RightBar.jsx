import React from 'react'
import style from './RightBar.module.css'
import RightBarOpenMenu from '../RightBarOpenMenu/RightBarOpenMenu'



const RightBar = ({ leftBarDefault, data }) => {

  return (
    <div className={style.skin} style={{ width: leftBarDefault ? '94.5vw' : '' }}>{data.type === 993 ?
      <RightBarOpenMenu data={data.data}/>
      :
      'zxc'
    }</div>
  )
}

export default RightBar