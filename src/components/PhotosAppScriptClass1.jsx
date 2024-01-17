import React from 'react'
import './photosAppScriptClass1.css'
import img1 from './cardsPhotos/1.jpg'
import img2 from './cardsPhotos/2.png'
import img3 from './cardsPhotos/3.png'
import img4 from './cardsPhotos/4.jpg'
import img5 from './cardsPhotos/5.jpg'
import img6 from './cardsPhotos/6.jpg'
import img7 from './cardsPhotos/7.jpg'
import img8 from './cardsPhotos/8.jpg'

const PhotosAppScriptClass1 = () => {
  return (
    <article className="main-photo1">
      <h2>Data base of cars photos</h2>
      <div className='main-photo1-div'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </article>
  )
}

export default PhotosAppScriptClass1