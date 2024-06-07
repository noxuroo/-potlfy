import React from 'react'
import style from './Unexpage.module.css'
import { Link } from 'react-router-dom'

const Unexpage = () => {
    return (
        <div>
            <div className={style.bigblock}>
                <div className={style.content}>
                    <div className={style.text404}>Page not found.</div>
                    <div className={style.moretext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit exercitationem excepturi doloremque earum adipisci beatae omnis repellat, nesciunt aut maiores, tempora ducimus odit dignissimos officia saepe, suscipit minus ex?</div>
                    <Link to="/">
                        <div className={style.back}>Home Page</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
 
export default Unexpage