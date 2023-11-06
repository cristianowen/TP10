import './Home.css'
import React from 'react'
import { useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import Favorito from './FavoritoBoton'

const Favoritos = () => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)
  return (
    <div className='margengrande bottom'>   
      <h1>Favoritos</h1>
      {favoritos.length > 0 ? (
        favoritos.map((favoritos) =>
        <section className='creacion' key={favoritos.id}>
        <p>Mi proyecto N° {favoritos.id}</p>
        <h2 className='creacionProyecto'><b>{favoritos.nombre}</b></h2>
        <p>{favoritos.info}</p>
        <p>Lenguaje de programación: {favoritos.lenguaje}</p>
        <a  style={{  color: 'white'}} href={favoritos.respositorio} target="_blank" rel="noopener noreferrer">{favoritos.respositorio}</a>
        <Favorito id={favoritos.id}/>
    </section>
        ))  : (
        <><h1>vacío</h1></>
      )
      }
    </div>
  )
}

export default Favoritos