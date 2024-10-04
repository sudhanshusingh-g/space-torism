import React from 'react'

function Home() {
  return (
    <section className=" h-[100%] flex items-center justify-center ">
        <div className=" h-[80%] w-[90%] lg:w-[80%] flex items-end ">
          <div className=" flex items-center flex-col lg:flex-row gap-4">
            <div className="flex flex-col gap-4 lg:w-[50%] items-center lg:items-start">
              <p className="text-blue-300/70 font-barlow font-normal uppercase">
                So, You Want To Travel To
              </p>
              <h1 className="text-white uppercase text-8xl font-bellefair font-normal">Space</h1>
              <p className="text-blue-300/70 leading-7 text-center
              md:w-[64%] lg:w-[100%] lg:text-left font-barlow font-normal">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="flex justify-end flex-1 group">
              <div className=" h-56 w-56 group-hover:bg-white/30 lg:h-64 lg:w-64 rounded-full
              transition-all duration-300 flex items-center justify-center">
                <button className="bg-white h-48 w-48 lg:h-56 lg:w-56 rounded-full text-2xl font-bellefair font-normal uppercase">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home


