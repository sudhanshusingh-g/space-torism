import React from "react";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-end bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-center">
      <div className="h-fit lg:h-4/5 flex items-center flex-col justify-center p-4 lg:justify-end lg:p-8">
        <div className="flex items-center flex-col lg:flex-row lg:space-x-16">
          <div className="lg:w-[48%] leading-normal text-center lg:text-left space-y-0 lg:space-y-0">
            <p className="text-blue-800 uppercase text-[1rem] lg:text-[1.25rem] font-barlow font-light tracking-widest">
              So you want to travel to
            </p>
            <h1 className="text-white text-[5rem] md:text-[7rem] lg:text-[9rem] uppercase font-bellefair">
              Space
            </h1>
            <p className="text-blue-800 text-[0.9rem] md:text-[1rem] lg:text-[1.125rem] font-barlow font-[300] max-w-[28rem] lg:max-w-none">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="h-60 w-60 md:h-72 md:w-72 rounded-full hover:bg-white/20 flex items-center justify-center transition-bg duration-300 hover:animate-pulse">
              <button className="h-40 w-40 md:h-48 md:w-48 bg-white rounded-full font-bellefair text-3xl md:text-4xl transition-transform duration-300 transform hover:scale-105 focus:scale-105">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
