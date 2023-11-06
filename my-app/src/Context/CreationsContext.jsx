import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creations, setCreations] = React.useState([{
        id: 1,
        nombre: 'Bicho Store',
        info: 'E-commerce para el club Argentinos Juniors',
        lenguaje: 'React, Css',
        imagen: null
      },
      {
        id: 2,
        nombre: 'To do list',
        info: 'Lista de tareas.',
        lenguaje: 'React, Css',
        imagen: null
      },
      {
        id: 3,
        nombre: 'Urban Luxury',
        info: 'Página de concientización del cambio climatico y donaciones.',
        lenguaje: 'React, Css',
        imagen: null
      },
      {
        id: 4,
        nombre: 'Flags Handling',
        info: 'Un juego en el cual tenes que adivinar la bandera',
        lenguaje: 'JS, CSS',
        imagen: null
      },
      {
        id: 5,
        nombre: 'Adopcion de perros',
        info: 'Página para adoptar perros.',
        lenguaje: 'JS, CSS',
        imagen: null
      },
      {
        id: 6,
        nombre: 'Akimbo',
        info: 'Mi marca de ropa donde uso TiendaNube para administrar ventas.',
        lenguaje: 'TiendaNube',
        imagen: null
      }
    ])

    return <CreacionesContext.Provider value={{creaciones: creations, setCreaciones: setCreations}}>{props.children}</CreacionesContext.Provider>
}

export default CreacionesProvider;