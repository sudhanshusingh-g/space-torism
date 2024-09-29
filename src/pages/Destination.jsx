import React from 'react'

function Destination() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-center">
      <div className="min-h-[60vh] w-[80%] mt-32 lg:mt-0 flex flex-col justify-between gap-8 lg:gap-4">
        <div className="flex items-center space-x-3 text-3xl font-barlow uppercase">
          <h1 className="text-white/50">01</h1>
          <h1 className="text-white">Destination</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="w-[80%] md:w-[56%]">
              <img
                src="/src/assets/destination/image-moon.png"
                alt="Destination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className="flex flex-col space-y-8 lg:items-start items-center">
              <ul className="font-barlow flex items-center space-x-4 uppercase">
                <li className="text-white relative group cursor-pointer">
                  Moon
                  <span className="absolute left-0 -bottom-4 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="text-white">Mars</li>
                <li className="text-white">Europa</li>
                <li className="text-white">Titan</li>
              </ul>
              <div className="text-center lg:text-left">
                <h1 className="text-7xl text-white font-bellefair uppercase">
                  Moon
                </h1>
                <p className="text-blue-800/60 font-light leading-7">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
              </div>
              <hr className="h-[1px] bg-white/50 w-full" />

              <div className="flex items-center flex-col gap-8 pb-4 lg:flex-row">
                <div className="">
                  <p className="font-barlow mb-2 text-blue-800/60 font-light uppercase text-sm">
                    Avg. Distance
                  </p>
                  <p className="font-bellefair text-white text-2xl">
                    384,400 km
                  </p>
                </div>
                <div>
                  <p className="font-barlow mb-2 text-blue-800/60 font-light uppercase text-sm">
                    Est. Travel Time
                  </p>
                  <p className="font-bellefair text-white text-2xl text-center lg:text-left">3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination