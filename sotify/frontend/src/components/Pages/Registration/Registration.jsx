import React from 'react'
import style from './Registration.module.css'
import UserService from '../../../../../frontend/src/services/UserService';

const Registration = () => {
  return (
    <div>
      <div className={style.bigblock}>
        <form className={style.form}>
          <div className={style.text}>RegistrationZZ</div>
          <input className={style.input} type="text" placeholder='your name' />
          <input className={style.input} type="password" placeholder='your password' />
          <button className={style.confirm} onClick={(e) => { e.preventDefault(); UserService.createNewUser() }}></button>
        </form>
      </div>
    </div>
  )
}

export default Registration