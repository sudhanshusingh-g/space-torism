import React, { useState } from "react";

function Technology() {

  const technologies = [
    {
      id: 1,
      title: "The Launch Vehicle",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      mobileImage: "/assets/technology/image-launch-vehicle-landscape.jpg",
      desktopImage: "/assets/technology/image-launch-vehicle-portrait.jpg",
    },
    {
      id: 2,
      title: "Spaceport",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      mobileImage: "/assets/technology/image-spaceport-landscape.jpg",
      desktopImage: "/assets/technology/image-spaceport-portrait.jpg",
    },
    {
      id: 3,
      title: "Space Capsule",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      mobileImage: "/assets/technology/image-space-capsule-landscape.jpg",
      desktopImage: "/assets/technology/image-space-capsule-portrait.jpg",
    },
  ];

  const [currentTechnologyIndex, setCurrentTechnologyIndex] = useState(0);
  const currentTechnology = technologies[currentTechnologyIndex];



  return (
    <section className="h-full flex flex-col items-end transition-all duration-300">
      <div className="h-full w-[100%] lg:w-[90%] flex flex-col gap-4">
        <h1 className="uppercase font-barlow text-2xl w-[90%] lg:w-[100%] ml-auto">
          <span className="font-medium mr-2 text-white/30">02</span>
          <span className="font-normal text-white">Crew</span>
        </h1>
        <div className="lg:h-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 order-2 lg:order-1">
            <div className="flex lg:flex-col gap-8">
              {technologies.map((technology) => (
                <button
                  key={technology.id}
                  className={`rounded-full h-10 w-10 border ${
                    currentTechnologyIndex === technology.id - 1
                      ? "bg-white text-black"
                      : "text-blue-300"
                  } `}
                  onClick={() => setCurrentTechnologyIndex(technology.id - 1)}
                >
                  {technology.id}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <p className="uppercase font-bellefair text-blue-300/50 text-xl">
                The Terminology...
              </p>
              <h1 className="text-4xl font-bellefair text-white uppercase text-center lg:text-left">
                {currentTechnology.title}
              </h1>
              <p className="text-blue-300/80 font-barlow text-center leading-7 w-[72%] lg:w-[100%] lg:text-left">
                {currentTechnology.description}
              </p>
            </div>
          </div>
          <div className="flex order-1 lg:order-2 ">
            <div className="">
              <picture>
                <source
                  srcSet={currentTechnology.desktopImage}
                  media="(min-width: 1024px)"
                  type="image/jpg"
                />
                <img
                  src={currentTechnology.mobileImage}
                  alt={currentTechnology.title}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
