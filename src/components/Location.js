import React from 'react'
import img from '../Assets/img.jpeg'
function Location() {
  return (
    <div className="mt-[48px] grid grid-cols-2">
      <div className="col-span-1">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className="col-span-1 bg-fuchsia-500 w-full h-full">
        <p>sdadsadsa</p>
      </div>
    </div>
  )
}

export default Location
