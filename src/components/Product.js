import React from 'react'
import kelapa1 from '../Assets/Minyak-Kelapa-Murni-1.png'
import Card from './Card'

function Product() {
  return (
    <div className="py-[60px] px-[16rem]">
      <p className="text-center ">Our Products</p>
      <p className="text-center pt-[8px]">
        Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
      </p>
      <div className="pt-[48px] grid grid-cols-4 gap-x-4">
        <Card img={kelapa1} judul={'1'} judul2={'2'} />
        <Card img={kelapa1} judul={'1'} judul2={'2'} />
        <Card img={kelapa1} judul={'1'} judul2={'2'} />
        <Card img={kelapa1} judul={'1'} judul2={'2'} />
      </div>
    </div>
  )
}

export default Product
