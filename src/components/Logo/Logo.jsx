import React from 'react'
import logo from "../../assets/logo.svg"
function Logo({width=100}) {
  return (
    <div className={`w-[${width}px]`}>
        <img src={logo} alt="React Logo" />
    </div>
  )
}

export default Logo