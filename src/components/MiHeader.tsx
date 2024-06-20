import React from 'react'
import Boton from './Boton'


const MiHeader = () => {
  return (
    <header>
      <nav className="flex w-full px-3 pt-5 pb-3 justify-between bg-opacity-0">
        <div className=" h-8 w-[200px] bg-no-repeat mx-0 my-auto bg-[url(/starter-code/assets/logo-dark.svg)] dark:bg-[url(/src/assets/logo-light.svg)]">
        </div>
        <Boton contenido='Get Started' estilos="bg-[#13183F] text-[#F8F9FF] dark:bg-[#F8F9FF] dark:text-[#13183F] py-3 px-8 rounded-full m-[0 auto]  active:opacity-70 hover:opacity-70" />
      </nav>
    </header>
  )
}

export default MiHeader
