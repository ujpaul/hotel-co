
import React from "react";
import { PiGlobeDuotone } from "react-icons/pi"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link";
const Header = () => {
  return (
    <header className='flex justify-between display-none'>
      <div className='ml-[4%] mt-5'>
        <Link href='/'>
          <img src='/logo.png' width={102} height={80} />
        </Link>
      </div>
      <div className='flex flex-wrap justify-center gap-5 mt-9 display-none'>
        <span className='cursor-pointer text-[#222222]'>Stays</span>
        <span className='cursor-pointer text-[#8d8d8d]'>Experience</span>
        <span className='cursor-pointer text-[#8d8d8d]'>Online Experience</span>
      </div>
      <div className='mr-[4%] mt-7 flex justify-between gap-3 display-none'>
        <span className='mt-2'>Airbnb your home</span>
        <PiGlobeDuotone className='mt-3' width={16} height={16} />
        <div className='flex gap-2 justify-center items-center w-[86px] h-[48px]  rounded-full border border-[#a3a3a3] border-solid border-2 p-2'>
          <GiHamburgerMenu />
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
}

export default Header