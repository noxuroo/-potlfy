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
            <div className={style.topSide}>
                <img className={style.img} src={`/music_img/${img}`} />
                <div className={style.topSideText}>
                    <div className={style.whatis}>{whatis}</div>
                    <div className={style.namePlaylist}>{namePlaylist}</div>
                    <div className={style.authorPlaylist}>{authorPlaylist} • {songs.length} song{songs.length !== 1 && 's'}</div>
                    {description && <div className={style.description}>{description}</div>}
                </div>
            </div>
            <div className={style.lineseptopbot} />
            <div className={style.botSide}>
                <div className={style.topsidebotside}>
                    <div className={style.circle}></div>
                    <svg className={style.shufflesvg} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_30_16)">
                            <path d="M36.9416 18.9497H49.2555V31.2143L68 17.5814L49.2555 3.94861V16.2132H36.9416C27.1343 16.2132 19.1549 24.1926 19.1549 34C19.1549 42.2981 12.4028 49.0503 4.10463 49.0503H1.36821C0.61159 49.0503 0 49.6618 0 50.4185C0 51.1751 0.61159 51.7867 1.36821 51.7867H4.10463C13.912 51.7867 21.8913 43.8073 21.8913 34C21.8913 25.7018 28.6435 18.9497 36.9416 18.9497ZM51.9919 9.32293L63.3481 17.5814L51.9919 25.84V9.32293Z" fill="#8A8A8A" />
                            <path d="M1.36821 18.9497H4.10463C7.81658 18.9497 11.3808 20.3097 14.1418 22.7793C14.4031 23.0133 14.7301 23.1282 15.0544 23.1282C15.4293 23.1282 15.8042 22.9749 16.0737 22.6726C16.5772 22.1089 16.5293 21.2442 15.967 20.7407C12.7038 17.8209 8.49111 16.2133 4.10463 16.2133H1.36821C0.61159 16.2133 0 16.8248 0 17.5815C0 18.3381 0.61159 18.9497 1.36821 18.9497Z" fill="#8A8A8A" />
                            <path d="M49.2555 49.0503H36.9416C33.268 49.0503 29.7312 47.7149 26.9838 45.2904C26.4215 44.791 25.5554 44.843 25.0533 45.4122C24.5539 45.9786 24.6072 46.8434 25.175 47.3427C28.4231 50.2091 32.603 51.7867 36.943 51.7867H49.2569V64.0513L68.0013 50.4185L49.2555 36.7856V49.0503ZM51.9919 42.16L63.3481 50.4185L51.9919 58.677V42.16Z" fill="#8A8A8A" />
                            <path d="M67.065 50.405L51.51 59.3857L51.51 41.4244L67.065 50.405Z" fill="#8A8A8A" />
                            <path d="M67.065 50.405L51.51 59.3857L51.51 41.4244L67.065 50.405Z" fill="#8A8A8A" />
                            <path d="M67.065 17.51L51.51 26.4907L51.51 8.52933L67.065 17.51Z" fill="#8A8A8A" />
                            <path d="M67.065 17.51L51.51 26.4907L51.51 8.52933L67.065 17.51Z" fill="#8A8A8A" />
                        </g>
                        <defs>
                            <clipPath id="clip0_30_16">
                                <rect width="68" height="68" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={style.mpoint}>...</div>
                </div>
                <div className={style.lineseptopbot} />
                <div className={style.midsidebotside}>
                    <div className={style.hashtag}>#</div>
                    <div className={style.title}>Title</div>
                    <div className={style.album}>Album</div>
                    <div className={style.timeduration}>Duration</div>
                </div>
                <div className={style.botsidebotside}></div>
            </div>
        </div>
    )
}

export default RightBarOpenMenu