
import { PiGlobeDuotone } from "react-icons/pi"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaUserCircle } from "react-icons/fa"
import Link from "next/link";
const Header = () => {
  return (
    <header className='flex justify-between'>
      <div className='ml-20 mt-3'>
        <Link href='/'>
          <img src='/logo.png' width={102} height={80} />
        </Link>
      </div>
      <div className='flex justify-center gap-5 mt-9'>
        <span className='cursor-pointer text-[#222222]'>Stays</span>
        <span className='cursor-pointer text-[#8d8d8d]'>Experience</span>
        <span className='cursor-pointer text-[#8d8d8d]'>Online Experience</span>
      </div>
      <div className='mr-20 mt-7 flex justify-between gap-3'>
        <span className='mt-2'>Airbnb your home</span>
        <PiGlobeDuotone className='mt-3' />
        <div className='flex gap-2  rounded-full border border-[#a3a3a3] border-solid border-2 p-2'>
          <GiHamburgerMenu />
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
}

export default Header