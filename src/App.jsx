import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Destination from './pages/Destination'
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App