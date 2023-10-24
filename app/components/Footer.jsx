import { footerTab, tabItems, footerMenu } from "../utils/footerData";
import { PiGlobeDuotone } from "react-icons/pi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import {AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
    <footer className='w-full px-20 pt-10 bg-[#f7f7f7]'>
      <b className='text-[#222222] text-xl'>Inspiration for future gateways</b>
      <div className='flex gap-4 flex-wrap mt-4'>
        {footerTab.map((tab, index) => (
          <span key={index}>{tab}</span>
        ))}
      </div>
      <div className='w-[95%] h-[2px] bg-[#e9e9e9] mb-3 mt-2' />
      <div className='w-full flex flex-wrap gap-[50px] my-10'>
        {tabItems.map((item, index) => (
          <div className='flex flex-col w-[200px]' key={index}>
            <b className='cursor-pointer'>{item.title}</b>
            <span className='cursor-pointer'>{item.subTitle}</span>
          </div>
        ))}
      </div>
      <div className='w-[95%] h-[2px] bg-[#e9e9e9] my-4' />
      <div className='flex justify-between my-10 w-[80%]'>
        {footerMenu.map((menu, index) => (
          <div className='flex flex-col' key={index}>
            <p className='mb-2 text-[#222222] cursor-pointer'>{menu.menu}</p>
            <div className='flex flex-col'>
              {menu.children.map((child, index) => (
                <span className='cursor-pointer mb-2' key={index}>
                  {child}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='w-[95%] h-[2px] bg-[#e9e9e9] my-4' />
      <div className='flex justify-between flex-wrap'>
        <div className='flex  gap-3 flex-wrap'>
          <span>&copy; {new Date().getFullYear()} Airbnb,Inc</span>
          <span>. &nbsp; Terms</span>
          <span>. &nbsp; Sitemap</span>
          <span>. &nbsp; Privacy</span>
          <span>. &nbsp; Your Privacy Choices</span>
        </div>
        <div className='flex gap-3 flex-wrap mb-4'>
          <PiGlobeDuotone className='mt-1' />
          <span>English(US)</span>
          <span>$</span>
          <span>USD</span>
          <FaFacebookSquare className='ml-4 mt-1' />
          <AiFillTwitterSquare className='ml-2 mt-1' />
          <FaInstagramSquare className='ml-2 mt-1' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
