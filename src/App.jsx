import React from 'react'
import MiHeader from './components/MiHeader'

const App = () => {
  return (
    <body className="flex flex-col bg-[#F8F9FF]  dark:bg-[#13183F]">
      <div className="max-w-[90%] m-auto">
        <MiHeader/>
        <section className="grid  auto-rows-[minmax(0,50vh)]  auto-cols-fr   md:grid-cols-2 ">
          <div className="self-center">
            <h1 className="text-[56px] dark:text-white font-bold px-3 mt-10 leading-tight text-balance ">
              Maximize skill, minimize budget
            </h1>
            <p className="text-[#83869A] dark:text-[#fffa] py-5 px-3 text-balance">
              Our modern courses across a range of in-demand skills will give you the
              knowledge you need to live the life you want.
            </p>
            <button className="bg-gradient-to-t from-[#f02aa6] to-[#FF6F48]  w-fit  text-white py-3 px-12 rounded-full mx-3 active:opacity-70 hover:opacity-70" type="button">Get Started</button>
          </div>
          <div className=" z-1 flex max-w-full w-full h-full  md:h-[640px] bg-no-repeat md:bg-[bottom_6rem_left_-3rem] bg-[url(/src/assets/image-hero-mobile.webp)] md:bg-[url(/src/assets/image-hero-tablet.webp)] lg:bg-[url(/src/assets/image-hero-desktop.webp)]"></div>
        </section>

        <main className="grid  auto-rows-[minmax(0,1fr)]  auto-cols-fr   md:grid-cols-2 lg:mb-12 lg:mt-20  lg:grid-cols-3 ">
          <p className=" flex w-[95%]  bg-gradient-to-t from-[#f02aa6] to-[#FF6F48]  text-white  text-2xl font-bold mx-auto my-3 justify-center rounded-lg py-5   md:pt-12 md:px-1 md:justify-around text-balance ">
            Check out our most <br/>popular courses!
          </p>

          <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
            <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src="/src/assets/icon-animation.svg" alt="animation"/>
              <div>
                <h2 className="px-3 pt-10 font-bold dark:text-white ">Animation</h2>
                <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
                  Learn the latest animation techniques to create stunning motion design and captivate your audience.
                </p>
                <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
                  Get Started
                </p>
              </div>
          </section>

          <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
            <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src="/src/assets/icon-design.svg" alt="ux"/>
              <div>
                <h2 className="px-3 pt-10 font-bold  dark:text-white ">UX/UI Design</h2>
                <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
                  From prototyping to testing, learn how to create seamless user experiences and interactive designs.
                </p>
                <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
                  Get Started
                </p>
              </div>
          </section>

          <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
            <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src="/src/assets/icon-photography.svg" alt="photography"/>
              <div>
                <h2 className="px-3 pt-10 font-bold  dark:text-white">Photography</h2>
                <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
                  Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
                </p>
                <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
                  Get Started
                </p>
              </div>
          </section>

          <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
            <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src="/src/assets/icon-crypto.svg" alt="crypto"/>
              <div>
                <h2 className="px-3 pt-10 font-bold  dark:text-white">Crypto</h2>
                <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
                  All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.
                </p>
                <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
                  Get Started
                </p>
              </div>
          </section>

          <section className="relative bg-white dark:bg-[#13183F] border-2 border-[#f02aa6] w-[90%] rounded-lg mx-auto mt-5 mb-5">
            <img className="px-3 pb-3 mt-3 absolute  bottom-[80%] " src="/src/assets/icon-business.svg" alt="business"/>
              <div>
                <h2 className="px-3 pt-10 font-bold  dark:text-white">Business</h2>
                <p className="text-[#83869A] dark:text-white py-5 px-3 w-3/4 text-balance">
                  A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
                </p>
                <p className="mx-3  pb-5 text-[#f02aa6] dark:text-[#FF6F48] font-bold">
                  Get Started
                </p>
              </div>
          </section>
        </main>
      </div>

      <footer className="bg-[#13183F] py-12 px-4 w-full md:w-[95%] lg:w-full lg:px-12 ">
        <div className=" flex lg:max-w-[85%]  items-center justify-between">
          <div className=" h-8 w-[200px] bg-no-repeat mx-0 my-auto bg-[url(/src/assets/logo-dark.svg)] dark: bg-[url(/src/assets/logo-light.svg)]">
          </div>
          <button className="bg-gradient-to-t from-[#F02AA6] to-[#4851FF] w-fit  text-white py-5 px-10 rounded-full ml-3 font-semibold text-lg active:brightness-150 hover:brightness-150" type="button">Get Started</button>
        </div>
      </footer>

    </body>
  )
}

export default App
