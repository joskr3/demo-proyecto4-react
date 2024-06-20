import React from 'react'
import MiHeader from './components/MiHeader'
import Hero from './components/Hero'
import Card from './components/Card'
import MiFooter from './components/MiFooter'
import TextCard from './components/TextCard'

const App = () => {
  const data = [
    {
      ruta: "/src/assets/icon-animation.svg",
      titulo: 'Animation',
      contenido: ' Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.',
      contenidoTexto: 'Get Started'
    },
    {
      ruta: "/src/assets/icon-design.svg",
      titulo: 'UX/UI Design',
      contenido: 'From prototyping to testing, learn how to create seamless user experiences and interactive designs.',
      contenidoTexto: 'Get Started'
    }
    ,
    {
      ruta: "/src/assets/icon-photography.svg",
      titulo: 'Photography',
      contenido: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      contenidoTexto: 'Get Started'
    },
    {
      ruta: "/src/assets/icon-crypto.svg",
      titulo: 'Crypto',
      contenido: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      contenidoTexto: 'Get Started'
    },
    {
      ruta: "/src/assets/icon-business.svg",
      titulo: 'Business',
      contenido: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      contenidoTexto: 'Get Started'
    } ]

  return (
    <body className="flex flex-col bg-[#F8F9FF]  dark:bg-[#13183F]">
      <div className="max-w-[90%] m-auto">
        <MiHeader />
        <Hero titulo='Maximize skill, minimize budget' contenido=' Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.' contenidoBoton='Get Started' />
        <main className="grid  auto-rows-[minmax(0,1fr)]  auto-cols-fr   md:grid-cols-2 lg:mb-12 lg:mt-20  lg:grid-cols-3 ">
          <TextCard />
          {
            data.map( ( { ruta, contenido, contenidoTexto, titulo } ) => <Card ruta={ruta} contenido={contenido} contenidoTexto={contenidoTexto} titulo={titulo} /> )
          }
        </main>
      </div>
      <MiFooter />
    </body>
  )
}

export default App
