import React, { useEffect, useState } from "react";
import "../styles/Crew.css";

function Crew() {
  const crews = [
    {
      id: 1,
      name: "Douglas Hurley",
      image: "/src/assets/crew/image-douglas-hurley.webp",
      role: "Commander",
      about:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      id: 2,
      name: "Mark Shuttleworth",
      image: "/src/assets/crew/image-mark-shuttleworth.webp",
      role: "Mission Specialist",
      about:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: 3,
      name: "Victor Glover",
      image: "/src/assets/crew/image-victor-glover.webp",
      role: "Pilot",
      about:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      id: 4,
      name: "Anousheh Ansari",
      image: "/src/assets/crew/image-anousheh-ansari.webp",
      role: "Mission Specialist",
      about:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const [currentCrewIndex, setCurrentCrewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); 
  const currentCrew = crews[currentCrewIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false); // Hide current image
      setTimeout(() => {
        setCurrentCrewIndex((prev) => (prev + 1) % crews.length);
        setIsVisible(true); 
      }, 500); 
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="h-full flex flex-col items-center justify-center transition-all duration-300">
      <div className="w-[90%] lg:w-[80%] flex flex-col gap-4">
        <h1 className="uppercase font-barlow text-lg w-full">
          <span className="font-medium mr-2 text-white/30">02</span>
          <span className="font-normal text-white">Crew</span>
        </h1>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col gap-8 justify-evenly items-center lg:items-start">
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <p className="uppercase font-bellefair text-blue-300/50 text-xl">
                {currentCrew.role}
              </p>
              <h1 className="text-2xl font-bellefair text-white uppercase">
                {currentCrew.name}
              </h1>
              <p className="text-blue-300/80 font-barlow text-center lg:text-left">
                {currentCrew.about}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {crews.map((_, index) => (
                <div
                  key={index}
                  className={`bg-white transition-all duration-300 h-[8px] w-[8px] rounded-full ${
                    currentCrewIndex === index ? "bg-white" : "bg-white/50"
                  } cursor-pointer`}
                  onClick={() => setCurrentCrewIndex(index)}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <div className="w-[64%] md:w-[40%] lg:w-[72%]">
              <img
                src={currentCrew.image}
                alt={currentCrew.name}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
