import React from 'react'
import logo from "../../assets/logo.svg"
function Logo() {
  return (
    <div className='ml-8'>
        <img src={logo} alt="Logo" 
        className='w-full h-full object-cover'
        />
    </div>
  )
}

export default Logo