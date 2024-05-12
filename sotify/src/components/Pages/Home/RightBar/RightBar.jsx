import React from 'react'
import style from './RightBar.module.css'
import RightBarOpenMenu from '../RightBarOpenMenu/RightBarOpenMenu'
import { Link } from 'react-router-dom'


const RightBar = ({ leftBarDefault, data }) => {

  return (
    <div className={style.skin} style={{ width: leftBarDefault ? '94.5vw' : '' }}>{data.type === 993 ?
      <RightBarOpenMenu data={data.data} />
      :
      <div className={style.homePage}>
        <div className={style.loginreg}>
          <Link to="/registration">
            <div className={style.reg}>Sign up</div>
          </Link>
          <Link to="/registration>">
            <div className={style.login}>Log in</div>
          </Link>
        </div>
      </div>
    }</div>
  )
}

export default RightBar