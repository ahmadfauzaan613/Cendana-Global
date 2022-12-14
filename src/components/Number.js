import React from 'react'
import CountUp from 'react-countup'

function Number() {
  return (
    <div className="py-[60px] bg-gray-300 ">
      <div className="px-[16rem] flex items-center justify-around">
        <div>
          <p className="text-center">
            <CountUp end={100} duration={6} />
          </p>
          <p>Sold Daily</p>
        </div>
        <div>
          <p className="text-center">
            <CountUp end={100} duration={6} />
          </p>
          <p>Sold Daily</p>
        </div>
        <div>
          <p className="text-center">
            <CountUp end={100} duration={6} />
          </p>
          <p>Sold Daily</p>
        </div>
        <div>
          <p className="text-center">
            <CountUp end={100} duration={6} />
          </p>
          <p>Sold Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Number
