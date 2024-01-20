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
import engi from './cardsPhotos/engineering.jpg'
import expe from './cardsPhotos/experience.jpg'
import lite from './cardsPhotos/literature.jpg'
import travel from './cardsPhotos/travel.jpg'
import people from './cardsPhotos/people.jpg'
import microscope from './cardsPhotos/microscope.jpg'
import arte from './cardsPhotos/arte.jpg'
import deporte from './cardsPhotos/deporte.jpg'
import escuela from './cardsPhotos/escuela.jpg'
import estudiantes from './cardsPhotos/estudiantes.jpg'
import evento from './cardsPhotos/evento.jpg'
import entrevista from './cardsPhotos/entrevista.jpg'



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
        <img src={engi} alt="" />
        <img src={expe} alt="" />
        <img src={lite} alt="" />
        <img src={travel} alt="" />
        <img src={people} alt="" />
        <img src={microscope} alt="" />
        <img src={arte} alt="" />
        <img src={deporte} alt="" />
        <img src={escuela} alt="" />
        <img src={estudiantes} alt="" />
        <img src={evento} alt="" />
        <img src={entrevista} alt="" />
      </div>
    </article>
  )
}

export default PhotosAppScriptClass1