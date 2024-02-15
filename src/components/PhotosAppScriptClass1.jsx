import React from 'react'
import './photosAppScriptClass1.css'
import people from './cardsPhotos/people.jpg'
import microscope from './cardsPhotos/microscope.jpg'
import arte from './cardsPhotos/arte.jpg'
import deporte from './cardsPhotos/deporte.jpg'
import estudiantes from './cardsPhotos/estudiantes.jpg'
import evento from './cardsPhotos/evento.jpg'
import entrevista from './cardsPhotos/entrevista.jpg'
import ai from './cardsPhotos/ai.png'
import ascensor from './cardsPhotos/ascensor.jpg'
import botella from './cardsPhotos/botella.png'
import congreso from './cardsPhotos/congreso.jpg'
import cubo from './cardsPhotos/cubo.jpg'
import marlene from './cardsPhotos/Decanamarlene.jpg'
import empren from './cardsPhotos/emprendedores.jpg'
import game from './cardsPhotos/game.jpeg'
import itsa from './cardsPhotos/itsa.jpg'
import karam from './cardsPhotos/karam.jpg'
import medalla from './cardsPhotos/medalla.png'
import mejores from './cardsPhotos/mejores.jpg'
import purdu from './cardsPhotos/purdu.jpg'
import semilleros from './cardsPhotos/semilleros.jpeg'
import territorio from './cardsPhotos/territorio.jpg'
import letanias from './cardsPhotos/letanias.jpg'
import induc from './cardsPhotos/induc2024.jpg'
import sedeFan from './cardsPhotos/sedefantasma.jpg'
import carnaval from './cardsPhotos/carnaval.jpg'
import uninews from './cardsPhotos/ubibaNews.jpg'
import concejeria from './cardsPhotos/concejeria2023.jpg'
import korea2023 from './cardsPhotos/korea2023.jpg'
import induc12023 from './cardsPhotos/inducción12023.jpg'
import guacher2024 from './cardsPhotos/guacherna2024.jpg'
import city from './cardsPhotos/city.jpg'
import dospuentes from './cardsPhotos/dospuentes.jpg'
import etica20231 from './cardsPhotos/finmedios.jpg'
import tech12024 from './cardsPhotos/tech.jpg'
import peoplenews from './cardsPhotos/peoplenews.jpg'
import robot from './cardsPhotos/robot.png'
import economysup from './cardsPhotos/economysus.jpg'
import cyberseg from './cardsPhotos/cyberseg.jpg'
import cloudcomp from './cardsPhotos/cloudcomp.jpg'
import flydata from './cardsPhotos/flyresult.jpg'
import concurcarna2024 from './cardsPhotos/concursocarna2024.jpg'
import redsea from './cardsPhotos/redsea.jpg'
import quianty from './cardsPhotos/quianty.jpg'
import carna20241 from './cardsPhotos/carna20241.jpeg'
import workdeporte from './cardsPhotos/workdeporte.jpg'
import applevision from './cardsPhotos/applevision.jpg.png'
import mujerdia124 from './cardsPhotos/mujerdia124.jpg'
import tyt12024 from './cardsPhotos/tyt12024.png'
import especializacion12024 from './cardsPhotos/especializacion12024.png'
import marketNew from './cardsPhotos/marketNew.jpg'
import radio2024 from './cardsPhotos/radio2024.jpg'
import valentin2024 from './cardsPhotos/valentin2024.jpg'
import ceniza2024 from './cardsPhotos/ceniza2024.jpg'
import salinidad from './cardsPhotos/salinidad.jpg'


const PhotosAppScriptClass1 = () => {

  let arrayOfPhotos = [people,microscope,arte,deporte ,estudiantes,evento,entrevista, ai,ascensor,botella,
    congreso,cubo,marlene, empren,game,itsa, karam,medalla,mejores,purdu,semilleros,territorio,letanias,induc,sedeFan,
    carnaval,uninews,concejeria,korea2023,induc12023,guacher2024,city,dospuentes,etica20231,tech12024,peoplenews,robot,economysup,cyberseg,
    cloudcomp,flydata,concurcarna2024,redsea,quianty,carna20241,workdeporte,applevision,mujerdia124,tyt12024,especializacion12024,marketNew,
    radio2024,valentin2024,ceniza2024,salinidad]

  return (
    <article className="main-photo1">
      <h2>Data base of cars photos</h2>
      <div className='main-photo1-div'>
        {
          arrayOfPhotos.map((photo,i)=>(
            <img key={i} src={photo} alt="" />
          ))
        }
      
      </div>
    </article>
  )
}

export default PhotosAppScriptClass1