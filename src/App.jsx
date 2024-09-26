import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App