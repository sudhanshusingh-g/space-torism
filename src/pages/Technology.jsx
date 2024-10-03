import React from 'react'

function Technology() {
  return (
    <div className="h-screen flex flex-col items-center justify-end bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-center">
      <div className="h-[80%] w-full flex flex-col gap-4">
        <div className=" text-xl md:text-3xl flex items-center space-x-2 font-barlow uppercase">
          <h1 className="text-white/50">02</h1>
          <h1 className="text-white">Space Launch 101</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="order-2 lg:order-1 flex items-center flex-col lg:flex-row gap-4">
            <div className="text-white flex lg:flex-col gap-6 font-bellefair">
              <button className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                1
              </button>
              <button className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                2
              </button>
              <button className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                3
              </button>
            </div>
            <div className='flex flex-col items-center lg:items-start'>
              <p className="font-bellefair text-white/50 uppercase">
                The terminology...
              </p>
              <h1 className="font-bellefair uppercase text-white text-4xl my-4">
                Spaceport
              </h1>
              <p className="leading-6 text-blue-800/90 text-sm w-[80%] mx-auto text-center lg:text-left lg:w-full">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="">
              <picture className="w-full h-full">
                <source
                  srcSet="/src/assets/technology/image-spaceport-portrait.jpg"
                  media="(min-width: 980px)"
                />
                <img
                  src="/src/assets/technology/image-spaceport-landscape.jpg"
                  alt="Spaceport"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology
