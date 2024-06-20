import React from 'react'

const MiFooter = () => {
  return (
    <footer className="bg-[#13183F] py-12 px-4 w-full md:w-[95%] lg:w-full lg:px-12 ">
      <div className=" flex lg:max-w-[85%]  items-center justify-between">
        <div className=" h-8 w-[200px] bg-no-repeat mx-0 my-auto bg-[url(/src/assets/logo-dark.svg)] dark: bg-[url(/src/assets/logo-light.svg)]">
        </div>
        <button className="bg-gradient-to-t from-[#F02AA6] to-[#4851FF] w-fit  text-white py-5 px-10 rounded-full ml-3 font-semibold text-lg active:brightness-150 hover:brightness-150" type="button">Get Started</button>
      </div>
    </footer>
  )
}

export default MiFooter
