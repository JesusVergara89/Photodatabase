import React from 'react'
import './photosShoes.css'
import img1 from './cardsShoes/1.png'
import img2 from './cardsShoes/2.png'
import img3 from './cardsShoes/3.png'
import img4 from './cardsShoes/4.png'
import img5 from './cardsShoes/5.png'
import img6 from './cardsShoes/6.png'
import img7 from './cardsShoes/7.png'
import img8 from './cardsShoes/8.png'

const PhotosShoes = () => {
  return (
    <article className="main-photo2">
      <h2>Data base of shoes photos</h2>
      <div className='main-photo2-div'>
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

export default PhotosShoes