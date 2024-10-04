import { useLocation, useParams } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react';

function Layout({
    children
}) {
    const currentLocation= useLocation();
    let location = currentLocation.pathname.split("/")[1];
    if(currentLocation.pathname === "/") {
        location = "home";
    };

    // Tailwind is constructed in such a way that it is not possible to use dynamic classes
    // So we have to create a variable to store the dynamic class
    const bgClass = `bg-${location}-mobile md:bg-${location}-tablet lg:bg-${location}-desktop`;
    
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