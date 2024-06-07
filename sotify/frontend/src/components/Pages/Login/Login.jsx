import React from 'react'
import style from './Login.module.css'

const Login = () => {
    return (
        <div>
            <div className={style.bigblock}>
                <form>
                    login
                    <input type="text" placeholder='your name' />
                    <input type="password" placeholder='your password' />
                    <button className={style.confirm} onClick={(e) => { e.preventDefault() }}></button>
                </form>
            </div>
        </div>
    )
}

export default Login