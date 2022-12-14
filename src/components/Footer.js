import React from 'react'
import logo from '../Assets/Screen-Shot-2022-01-15-at-15.15.08.png'
import call from '../Assets/call.png'
import insta from '../Assets/instagram.png'
function Footer() {
  return (
    <div className="pt-[60px] pb-[4px] px-[20rem]">
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-[7vw] h-full" />
      </div>
      <div className="flex items-start justify-around py-[48px]">
        <div>
          <p>About Company</p>
          <p className="pt-[16px]">
            Duty the obligations of business will <br /> frequently occur that pleasure have too <br /> repudiated annoyances endures <br /> accepted.
          </p>
        </div>
        <div>
          <p>Contact Us</p>
          <div className="flex items-center space-x-2 pt-[10px]">
            <img src={call} alt="" className="w-[15px] h-[15px]" />
            <p>0813 3456 78</p>
          </div>
          <div className="flex items-center space-x-2 py-[4px]">
            <img src={call} alt="" className="w-[15px] h-[15px]" />
            <p>021 1231 3123</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <img src={call} alt="" className="w-[15px] h-[15px]" />
            <p>mail@example.com</p>
          </div>
        </div>
        <div>
          <p>Social Media</p>
          <div className="pt-[10px] flex items-center space-x-2">
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
            <img src={insta} className="w-[32px] h-full" alt="" />
          </div>
        </div>
        <div>
          <p>Address</p>
          <p className="pt-[16px]">
            Jl. Indonesia Raya, Sudirman, Jakarta <br /> Selatan, DKI Jakarta, Indonesia, 10150
          </p>
        </div>
      </div>
      <p className="text-center">Copyright © 2022 Export Indonesia. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
