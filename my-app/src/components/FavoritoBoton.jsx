import React from 'react'
import './Home.css'
import { useContext } from 'react'

import { CreacionesContext as CreationsContext } from "../Context/CreationsContext"
import { FavoritosContext } from "../Context/FavoritosContext"


const Favoritos = (props) => {
    const { creaciones} = useContext(CreationsContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);

    const favoritosOn = favoritos.some((element) => element.id === props.id)

    console.log(favoritos)
    const botonFav = async () => {
        if (favoritosOn) {
            const indice = favoritos.findIndex((element) => (element.id) === props.id)
            console.log(indice)
            const nuev = [...favoritos]
            nuev.splice(indice, 1)
            setFavoritos(nuev)
        }
        else{
            setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
        }
    }
    
      const buttonClass = favoritosOn ? 'btn btn-danger' : 'btn btn-success';

    return (
        <div>
            <button className={buttonClass} onClick={botonFav} style={{padding: 5, marginTop: 20}}>{favoritosOn ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}</button>
        </div>
    )
}

export default Favoritos