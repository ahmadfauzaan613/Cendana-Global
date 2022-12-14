import React from 'react'

function Navbar() {
  return (
    <div className="flex items-center justify-between px-[16rem] py-[24px]">
      <img src="" alt="" />
      <div className="flex items-center space-x-4">
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">HOME</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">ABOUT US</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">GALLERY</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">PRODUCTS</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">BLOG</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">TEAM</p>
        <p className="text-[14px] cursor-pointer hover:text-[#00d084]">CONTACT</p>
      </div>
    </div>
  )
}

export default Navbar
