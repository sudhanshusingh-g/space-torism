import { Menu } from "lucide-react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="flex 
    items-center absolute w-[80%] left-1/2
    transform -translate-x-1/2 py-4">
      {/* Logo */}
      <div className="h-8 w-8 md:w-12 md:h-12">
        <img src="/src/assets/logo.svg" alt="Logo"
        className="w-full h-full object-cover"
        />
      </div>
      {/* Nav Items for Desktop */}
      <ul className="hidden flex-1 md:flex gap-4
      text-white bg-white/10 backdrop-blur-lg border
      border-white/20 rounded-lg shadow-lg p-4">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/destination">
          <li>Destination</li>
        </Link>
        <Link to="/crew">
          <li>Crew</li>
        </Link>
        <Link to="/technology">
          <li>Technology</li>
        </Link>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button>
          <Menu color="#fff"/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
