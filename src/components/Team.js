import React from 'react'
import orang1 from '../Assets/h3-team-1.jpeg'
import orang2 from '../Assets/h3-team-1.jpeg'
import orang3 from '../Assets/h3-team-1.jpeg'

function Team() {
  return (
    <div className="py-[30px] px-[16rem]">
      <p className="text-center ">Meet Our Staff</p>
      <p className="text-center pt-[8px]">
        Sed ut perspiciatis aperiam unde omnis istetus error <br /> volupta dolorem que laudantium, totam rem.
      </p>
      <div className="my-[48px] grid grid-cols-3 space-x-4">
        <div>
          <img src={orang1} className="w-[396px] h-[280px] rounded-[4px]" alt="" />
          <p className="py-[16px]">2</p>
          <p>1</p>
        </div>
        <div>
          <img src={orang1} className="w-[396px] h-[280px] rounded-[4px]" alt="" />
          <p className="py-[16px]">2</p>
          <p>1</p>
        </div>
        <div>
          <img src={orang1} className="w-[396px] h-[280px] rounded-[4px]" alt="" />
          <p className="py-[16px]">2</p>
          <p>1</p>
        </div>
      </div>
    </div>
  )
}

export default Team
