'use client';
import { useState, useEffect } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import Switch from "react-switch";
import { categories } from '../utils/categoryData';


const ImageCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [swiched, setSwiched] = useState(false)
    let containerWidth = windowWidth * 0.7;
  // Number of images to display per page based on the container's width
//   const imagesPerPage = Math.floor(containerWidth / 24);
    const imagesPerPage = 10;
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range for the current page
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  // Slice the images array to display the images for the current page
  const visibleImages = categories.slice(startIndex, endIndex);

  // Function to handle the "Next" button click
  const nextPage = () => {
    if (endIndex < categories.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the "Previous" button click
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    };
    useEffect(() => {
      // Update the window width when it changes
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div className='ml-20 mr-5 mt-10 overflow-hidden'>
      <div className='flex gap-3'>
        <div className='flex gap-[30px]' style={{ width: containerWidth }}>
          {currentPage > 0 && (
            <div className='flex justify-center items-center mt-3 w-[30px] h-[30px] rounded-full border border-[#eee] border-solid border-1'>
              <PiCaretLeftBold onClick={prevPage} className='cursor-pointer' />
            </div>
          )}
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className='flex flex-col gap-2 w-[80px] transition duration-300 ease-in-out'
            >
              <img
                key={index}
                src={image.icon.src}
                alt={image.title}
                width={24}
                height={24}
                className="ml-4"
              />
              <small className='text-[#8d8d8d] whitespace-nowrap text-[12px]'>
                {image.title}
              </small>
            </div>
          ))}
          {endIndex < categories.length && (
            <div className='flex justify-center items-center w-[30px] mt-3 h-[30px] rounded-full border border-[#eee] border-solid border-2'>
              <PiCaretRightBold onClick={nextPage} className='cursor-pointer' />
            </div>
          )}
        </div>
        <div className='flex gap-3'>
          <div className='flex gap-1 justify-center items-center rounded-[10px] border border-[#e2e2e2] w-[100px] h-[48px] border-solid border-1'>
            <img src='/filter.png' width={25} height={20} alt='filter icon' />
            <small className='mt-1'>Filters</small>
          </div>
          <div className='pl-1 pr-1 flex gap-1 justify-center items-center rounded-[10px] border border-[#e2e2e2] h-[48px] border-solid border-1'>
            <small className='mt-1 whitespace-nowrap'>
              Display total before taxes
            </small>
            <Switch checked={swiched} onChange={(checked)=> setSwiched(checked)}
                uncheckedIcon={false}
                checkedIcon={false}
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;