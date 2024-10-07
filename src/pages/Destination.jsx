import React, { useState } from 'react'

function Destination() {



  const destinations = [
    {
      id: 1,
      name: "Moon",
      distance: "384,400 KM",
      time: "3 Days",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      image: "/assets/destination/image-moon.png",
    },
    {
      id: 2,
      name: "Mars",
      distance: "225 MIL. km",
      time: "9 Months",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      image: "/assets/destination/image-mars.png",
    },
    {
      id: 3,
      name: "Europa",
      distance: "628 MIL. km",
      time: "3 Years",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      image: "/assets/destination/image-europa.png",
    },
    {
      id: 4,
      name: "Titan",
      distance: "1.6 BIL. km",
      time: "7 Years",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      image: "/assets/destination/image-titan.png",
    },
  ];

  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);
  const [fade, setFade] = useState(false);

  const handleDestinationChange = (item) => {
    setFade(true);
    setTimeout(() => {
      setSelectedDestination(item);
      setFade(false);
    }, 300);
  };

  return (
    <section className="h-[100%] flex items-center justify-center">
      <div className="  w-[90%] lg:w-[80%] flex flex-col gap-8">
        <h1 className=" uppercase font-barlow text-lg">
          <span className="font-medium mr-2 text-white/30">01</span>
          <span className="font-normal text-white">Destination</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="flex items-center justify-center">
            <div className={`w-[40%] md:w-[32%] lg:w-[100%] transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className=" w-[80%] flex flex-col gap-4 md:gap-6 md:items-center lg:items-start">
              <ul className="flex items-center gap-6 md:gap-8 uppercase font-barlow font-normal">
                {destinations.map((item) => (
                  <li
                    key={item.id}
                    className={`relative ${
                      selectedDestination.id === item.id
                        ? "text-white"
                        : "text-white/40 hover:text-white/80"
                    } cursor-pointer`}
                    onClick={() => handleDestinationChange(item)}
                  >
                    {item.name}
                    {selectedDestination.id === item.id && (
                      <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-white transition-all duration-300" />
                    )}
                  </li>
                ))}
              </ul>
              <h1 className="text-7xl text-center md:text-left text-white font-bellefair font-normal uppercase">
                {selectedDestination.name}
              </h1>
              <p className="text-blue-300 text-center lg:text-left leading-7 font-barlow font-normal">
                {selectedDestination.description}
              </p>
              <hr className="bg-white border-t-0.5 w-full" />
              <div className="flex items-center gap-4 md:gap-8 justify-center flex-col md:flex-row">
                <div className="uppercase text-center lg:text-left">
                  <h2 className="text-blue-300/60 font-barlow text-sm">
                    Avg.Distance
                  </h2>
                  <p className="text-white font-bellefair text-xl">
                    {selectedDestination.distance}
                  </p>
                </div>
                <div className="uppercase text-center lg:text-left">
                  <h2 className="text-blue-300/60 font-barlow text-sm">
                    Est. Travel Time
                  </h2>
                  <p className="text-white font-bellefair text-xl">
                    {selectedDestination.time}
                  </p>
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