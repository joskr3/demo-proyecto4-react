import React from 'react'

interface Props { 
  contenido: string;
  estilos: string;
}

const Boton = ({contenido,estilos}:Props) => {
  return (
    <button className={estilos} type="button">{ contenido}</button>
  )
}

export default Boton
