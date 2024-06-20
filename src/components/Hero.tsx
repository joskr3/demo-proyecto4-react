import React from 'react'

interface Props {
  titulo: string;
  contenido: string;
  contenidoBoton: string;
}

// Maximize skill, minimize budget
  
// Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.

const Hero = ({titulo,contenido,contenidoBoton}:Props) => {
  return (
    <section className="grid  auto-rows-[minmax(0,50vh)]  auto-cols-fr   md:grid-cols-2 ">
      <div className="self-center">
        <h1 className="text-[56px] dark:text-white font-bold px-3 mt-10 leading-tight text-balance ">
          {titulo}
        </h1>
        <p className="text-[#83869A] dark:text-[#fffa] py-5 px-3 text-balance">
          {contenido}
        </p>
        <button className="bg-gradient-to-t from-[#f02aa6] to-[#FF6F48]  w-fit  text-white py-3 px-12 rounded-full mx-3 active:opacity-70 hover:opacity-70" type="button">Get Started</button>
      </div>
      <div className=" z-1 flex max-w-full w-full h-full  md:h-[640px] bg-no-repeat md:bg-[bottom_6rem_left_-3rem] bg-[url(/src/assets/image-hero-mobile.webp)] md:bg-[url(/src/assets/image-hero-tablet.webp)] lg:bg-[url(/src/assets/image-hero-desktop.webp)]"></div>
    </section>
  )
}

export default Hero
