import React from 'react'

interface Props {
  ruta: string
  contenido: string
  contenidoTexto: string
  titulo: string
}

const Card = ({ ruta, contenido, contenidoTexto, titulo }: Props) => {
  return (
    <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
      <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src={ruta} alt="ux" />
      <div>
        <h2 className="px-3 pt-10 font-bold  dark:text-white ">{titulo}</h2>
        <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
          {contenido}
        </p>
        <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
          {contenidoTexto}
        </p>
      </div>
    </section>
  )
}

export default Card
