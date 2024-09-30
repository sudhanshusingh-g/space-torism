import React from 'react'

function Crew() {
  return (
    <div className="h-screen flex flex-col items-center justify-end bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-center">
      <div className="min-h-[80vh] w-[80%] mt-24 p-4 lg:mt-0 flex flex-col justify-between gap-8 lg:gap-4">
        <div className="flex items-center space-x-3 text-3xl font-barlow uppercase">
          <h1 className="text-white/50">02</h1>
          <h1 className="text-white">Crew</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:gap-32">
              <div>
                <p className="font-bellefair text-white/50 uppercase">
                  Commander
                </p>
                <h1 className="font-bellefair uppercase text-white text-4xl my-4">
                  Douglas Hurley
                </h1>
                <p className="leading-7 text-blue-800/90">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="cursor-pointer bg-blue-800/60 h-4 w-4 rounded-full"></div>
                <div className="cursor-pointer bg-blue-800/60 h-4 w-4 rounded-full"></div>
                <div className="cursor-pointer bg-blue-800/60 h-4 w-4 rounded-full"></div>
                <div className="cursor-pointer bg-blue-800/60 h-4 w-4 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className="w-[40%]  lg:w-full lg:h-full">
              <img
                src="/src/assets/crew/image-douglas-hurley.png"
                alt="Douglas Hurley"
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew