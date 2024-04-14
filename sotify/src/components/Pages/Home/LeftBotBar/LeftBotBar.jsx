import React from 'react'
import SvgTxt from '../../../UI/SvgTxt/SvgTxt'
import style from './LeftBotBar.module.css'
import EverySvgs from '../../../../svgData'
import Svg from '../../../UI/Svg/Svg'
import MusicPlate from '../../../UI/MusicPlate/MusicPlate'
import Music from '../../../../musicData'

const LeftBotBar = ({ leftBarDefault, currentStateLeftBarDefault, setContentData }) => {
  const MusicPlates = Music.map(
    element => {
      const albumMenuData = {
        type: 1000 - 7,
        data: {
          img: '',
          namePlaylist: '',
          authorPlaylist: '',
          description: '',
          whatis: 'Playlist',
          songs: [{
            img: '',
            author: '',
            songName: '',
            albumName: '',
            dateAdded: '',
            musicDuration: '',
          },
          ],

        }
      }
      return currentStateLeftBarDefault ? <img className={style.imggg} src={`/music_img/${element.img}`} onClick={() => {
        setContentData(albumMenuData)
      }} />
        :
        <div
          onClick={() => {
            setContentData(albumMenuData)
          }}
          className={style.MusicPlatesLimit}>
          <MusicPlate data={element} />
        </div>
    }
  )
  return (
    <div className={style.skin}>
      {currentStateLeftBarDefault
        ? <div className={style.svgtxtcont}>
          <Svg
            svgDefault={EverySvgs['YourLibrary']['DefaultExp']}
            svgHover={EverySvgs['YourLibrary']['HoverExp']}
            onClick={leftBarDefault}
            onClickState={currentStateLeftBarDefault}
          />
        </div>
        :
        <div className={style.SvgTxtYourLibrary}>
          <SvgTxt
            txt='Your Library'
            fontSize='min(1.04167vw, 1.85185vh)'
            svgComp={EverySvgs['YourLibrary']['DefaultUnExp']}
            svgCompOnHover={EverySvgs['YourLibrary']['HoverUnExp']}
            key='svgTxtLeftBotBarYourLibrary'
            onClick={leftBarDefault}
            onClickState={currentStateLeftBarDefault}
          />
        </div>}
      {MusicPlates}

    </div>
  )
}

export default LeftBotBar