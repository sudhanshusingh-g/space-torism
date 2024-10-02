import React from 'react'

function Technology() {
  return (
    <div className="h-screen flex flex-col items-center justify-end bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-center">
      <div className="h-[80%] w-full ">
        <div className=" text-xl md:text-3xl flex items-center space-x-2 font-barlow uppercase">
          <h1 className="text-white/50">02</h1>
          <h1 className="text-white">Space Launch 101</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="text-white flex flex-col space-y-8 font-bellefair">
              <div className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                1
              </div>
              <div className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                2
              </div>
              <div className="h-14 w-14 border rounded-full flex items-center justify-center text-2xl">
                3
              </div>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Technology