import React from 'react'

function Destination() {
  return (
    <section className="h-[100%] flex items-center justify-center">
      <div className="  w-[90%] lg:w-[80%] flex flex-col gap-8">
        <h1 className=" uppercase font-barlow text-lg">
          <span className="font-medium mr-2 text-white/30">01</span>
          <span className="font-normal text-white">Destination</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="flex items-center justify-center">
            <div className="w-[40%] md:w-[32%] lg:w-[100%] ">
              <img
                src="/src/assets/destination/image-moon.png"
                alt="Moon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className=" w-[80%] flex flex-col gap-4 md:gap-6 md:items-center lg:items-start">
              <ul className="flex items-center gap-6 md:gap-8 uppercase  font-barlow font-normal">
                <li className="text-white">Moon</li>
                <li className="text-white/50">Mars</li>
                <li className="text-white/50">Europa</li>
                <li className="text-white/50">Titan</li>
              </ul>
              <h1 className="text-7xl text-center md:text-left text-white font-bellefair font-normal uppercase">
                Moon
              </h1>
              <p className="text-blue-300 text-center lg:text-left leading-7 font-barlow font-normal">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr className="bg-white border-t-0.5 w-full" />
              <div className="flex items-center gap-4 md:gap-8 justify-center flex-col md:flex-row">
                <div className="uppercase text-center lg:text-left">
                  <h2 className="text-blue-300/60 font-barlow text-sm">
                    Avg.Distance
                  </h2>
                  <p className="text-white font-bellefair text-xl">
                    384,400 KM
                  </p>
                </div>
                <div className="uppercase text-center lg:text-left">
                  <h2 className="text-blue-300/60 font-barlow text-sm">
                    Est. Travel Time
                  </h2>
                  <p className="text-white font-bellefair text-xl">3 Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination