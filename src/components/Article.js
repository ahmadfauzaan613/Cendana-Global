import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slick from './Slick'

function Article() {
  return (
    <div className="my-[60px]">
      <div className="py-[30px] px-[16rem] bg-zinc-300">
        <p className="text-center ">Articles & Blog</p>
        <p className="text-center pt-[8px]">
          Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
        </p>
        <div>
          <Slick />
        </div>
      </div>
    </div>
  )
}

export default Article
