import React from 'react';

export const CreacionesContext = React.createContext();

const CreacionesProvider = (props) => {
    const [creations, setCreations] = React.useState([{
        id: 1,
        nombre: 'Bicho Store',
        descripcion: 'E-commerce para el club Argentinos Juniors',
        leguaje: 'React, Css',
        imagen: null
      },
      {
        id: 2,
        nombre: 'To do list',
        descripcion: 'Lista de tareas.',
        leguaje: 'React, Css',
        imagen: null
      },
      {
        id: 3,
        nombre: 'Urban Luxury',
        descripcion: 'Página de concientización del cambio climatico y donaciones.',
        leguaje: 'React, Css',
        imagen: null
      },
      {
        id: 4,
        nombre: 'Flags Handling',
        descripcion: 'Un juego en el cual tenes que adivinar la bandera',
        leguaje: 'JS, CSS',
        imagen: null
      },
      {
        id: 5,
        nombre: 'Adopcion de perros',
        descripcion: 'Página para adoptar perros.',
        leguaje: 'JS, CSS',
        imagen: null
      },
      {
        id: 6,
        nombre: 'Akimbo',
        descripcion: 'Mi marca de ropa donde uso TiendaNube para administrar ventas.',
        leguaje: 'TiendaNube',
        imagen: null
      }
    ])

    return <CreacionesContext.Provider value={{creaciones: creations, setCreaciones: setCreations}}>{props.children}</CreacionesContext.Provider>
}

export default CreacionesProvider;