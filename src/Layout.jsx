import { useLocation, useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function Layout({
    children
}) {
    const currentLocation= useLocation();
    let location = currentLocation.pathname.split("/")[1] || "home";
    

    // Tailwind is constructed in such a way that it is not possible to use dynamic classes
    // So we have to create a variable to store the dynamic class
    const backgroundClasses = {
        home: "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
        destination: "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop",
        crew: "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop",
        technology: "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop",
    }

    const bgClass = backgroundClasses[location] || backgroundClasses["home"];
    
  return (
    <div
      className={`flex flex-col h-screen relative bg-no-repeat bg-center bg-cover ${bgClass}`}
    >
      <Navbar />
      <section className='flex-1'>{children}</section>
    </div>
  );
}

export default Layout