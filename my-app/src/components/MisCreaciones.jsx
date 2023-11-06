import React, { useState, useContext } from 'react';
import './Home.css';
import Favorito from './FavoritoBoton';
import { CreacionesContext } from '../Context/CreationsContext';

const MisCreaciones = () => {
  const { creaciones } = useContext(CreacionesContext);
  const proyectoPorPagina = 4;
  const [paginaActual, setPaginaActual] = useState(1);

  const obtenerPosiciones = () => {
    const proyectoUltimo = paginaActual * proyectoPorPagina;
    const proyectoUno = proyectoUltimo - proyectoPorPagina;
    return creaciones.slice(proyectoUno, proyectoUltimo);
  };

  const nextPage = (siguientePag) => {
    setPaginaActual(siguientePag);
  };

  return (
    <div className="margengrande bottom">
      <h1>Todos mis proyectos</h1>
      {obtenerPosiciones().map((creacion) => (
        <section className="creacion" key={creacion.id}>
          <p>Mi proyecto N° {creacion.id}</p>
          <h2>{creacion.nombre}</h2>
          <p>{creacion.info}</p>
          <p>Lenguaje de programación: {creacion.lenguaje}</p>
          <Favorito id={creacion.id} />
        </section>
      ))}

      <div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => nextPage(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <span>pag. {paginaActual}</span>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => nextPage(paginaActual + 1)}
          disabled={paginaActual * proyectoPorPagina >= creaciones.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MisCreaciones;
