import React, { useContext } from 'react';
import './Home.css';
import { FavoritosContext } from "../Context/FavoritosContext";
import Favorito from './FavoritoBoton';

const Favoritos = () => {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div className='margengrande bottom'>   
      <h1>Favoritos</h1>
      {favoritos.length > 0 ? (
        favoritos.map((favorito) => (
          <section className='creacion' key={favorito.id}>
            <p>Mi proyecto N° {favorito.id}</p>
            <h2 className='creacionProyecto'><b>{favorito.nombre}</b></h2>
            <p>{favorito.info}</p>
            <p>Lenguaje de programación: {favorito.lenguaje}</p>
            <a style={{ color: 'white' }} href={favorito.respositorio} target="_blank" rel="noopener noreferrer">
              {favorito.respositorio}
            </a>
            <Favorito id={favorito.id}/>
          </section>
        ))
      ) : (
        <h1>vacío</h1>
      )}
    </div>
  );
};

export default Favoritos;
