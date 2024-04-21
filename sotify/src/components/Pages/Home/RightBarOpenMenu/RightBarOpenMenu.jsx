import React from 'react'
import style from './RightBarOpenMenu.module.css'

const RightBarOpenMenu = ({ data }) => {
    console.log(data)
    const {
        img,
        namePlaylist,
        authorPlaylist,
        description,
        whatis,
        songs,
    } = data
    return (
        <div>
            <div className={style.fullblock}>
                <img className={style.img} src={`/music_img/${img}.jpg`} />
                <div className={style.fullblocktext}>
                    <div className={style.whatis}>{whatis}</div>
                    <div className={style.namePlaylist}>{namePlaylist}</div>
                    <div className={style.authorPlaylist}>{authorPlaylist}</div>
                    <div className={style.description}>{description}</div>
                </div>
            </div>
        </div>
    )
}

export default RightBarOpenMenu