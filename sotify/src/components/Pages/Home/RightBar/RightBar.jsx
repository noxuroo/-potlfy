import React from 'react'
import style from './RightBar.module.css'



const RightBar = ({ leftBarDefault, data }) => {
  const {
    img,
    namePlaylist,
    authorPlaylist,
    description,
    whatis,
    songs,
  } = data.type === 993 ? data.data
      :
      { a: '', a: '', a: '', a: '', a: '', a: '' }

  const album = <div>{img}{namePlaylist}{authorPlaylist}{description}{whatis}{songs}</div>
  return (
    <div className={style.skin} style={{ width: leftBarDefault ? '94.5vw' : '' }}>{data.type === 993 ?
      album
      :
      'zxc'
    }</div>
  )
}

export default RightBar