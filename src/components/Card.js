import React from 'react'

function Card(props) {
  return (
    <div>
      <div className="bg-gray-400">
        <img src={props.img} alt="" className="w-full h-full" />
      </div>
      <p className="py-[16px]">{props.judul}</p>
      <p>{props.judul2}</p>
    </div>
  )
}

export default Card
