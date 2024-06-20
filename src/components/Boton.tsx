import React from 'react'

interface Props {
  contenido: string;
  estilos: string;
}
//PROP DRYLING -> PASAR DATA DE UN COMPONENTE A OTRO 
const Boton = ({ contenido, estilos }: Props) => {
  return (
    <button className={estilos} type="button">{contenido}</button>
  )
}

export default Boton
