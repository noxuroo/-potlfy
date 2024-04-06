import React from 'react'
import style from './MusicPlate.module.css'

const MusicPlate = ({ data }) => {
  const { title, subdesc, img, ispinned, whatis } = data
  return (
    <div className={style.musicPlate}>
      <div className={style.img}>
        <img src={`music_img/${img}`} />
      </div>
      <div>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.subdesc}>
          {ispinned&&<img src='svgs/pin.svg' className={style.pin}/>}
          {whatis} • {subdesc}
        </div>
      </div>
      <div className={style.ispinned}>

      </div>
    </div>
  )
}

export default MusicPlate
