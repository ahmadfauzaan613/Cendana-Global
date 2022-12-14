import React from 'react'
import kelapa1 from '../Assets/Coconut-The_Wonder_Fruit-1920x1280-940x627-1.jpeg'
import kelapa2 from '../Assets/pexels-photo-7676720.jpeg'
import kelapa3 from '../Assets/photo-1580984969064-9a264d75832c.jpg'
function Photo() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        <img src={kelapa1} alt="" className="w-full h-full" />
        <img src={kelapa2} alt="" className="w-full h-full" />
        <img src={kelapa3} alt="" className="w-full h-full" />
      </div>
      <div className="hero2 w-full">
        <p className="text-white font-bold centered text-center py-[12%]">ssddddddddddd</p>
      </div>
    </div>
  )
}

export default Photo
