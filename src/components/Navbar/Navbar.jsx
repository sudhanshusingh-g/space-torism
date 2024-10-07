import { Menu, X } from "lucide-react"; // Import the close icon
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "/destination" },
    { name: "Crew", path: "/crew" },
    { name: "Technology", path: "/technology" },
  ];

  const location = useLocation();
  const activeIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileNavRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="flex items-center justify-between lg:h-[14%]">
      {/* Logo */}
      <div className="w-10 h-10 ml-4">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <hr className="w-[40%] h-0.5 bg-white/20 hidden lg:block" />
      {/* Navigation */}
      <nav className="flex items-center md:bg-white/10 backdrop-blur-lg shadow-md py-4 md:pr-8 pl-16 lg:w-[50%]">
        <ul className="text-white gap-4 hidden md:flex uppercase font-barlow">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <li
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className="text-sm relative"
                onClick={() => setHoveredIndex(index)}
              >
                <span className="mr-1 font-semibold">0{index}</span>
                <span className="font-light">{item.name}</span>
                <div
                  className={`absolute bottom-[-1rem] left-0 right-0 h-[2px] transition-all duration-300 ${
                    index === activeIndex || index === hoveredIndex
                      ? "bg-white/70 w-full"
                      : "bg-white/20 w-0"
                  }`}
                ></div>
              </li>
            </Link>
          ))}
        </ul>
        <Menu
          className="text-white md:hidden w-10 h-10 mr-4"
          onClick={handleMenuClick}
        />
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 md:hidden flex justify-end">
          <div
            ref={mobileNavRef}
            className="flex flex-col items-end h-full gap-16 bg-white/20 backdrop-blur-md rounded-lg w-[80%] p-4"
          >
            <X
              className="text-white w-8 h-8 mb-4 cursor-pointer"
              onClick={handleMenuClick}
            />
            <nav className="flex flex-col space-y-8 w-full">
              {navItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setMenuOpen(false)}
                >
                  <div
                    className={`text-white text-2xl font-barlow flex items-center justify-between ${
                      index === activeIndex ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.name}
                    {
                      index === activeIndex && (
                        <div className="h-7 bg-white w-1"></div>
                      )
                    }
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
