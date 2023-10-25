"use client";
import React, { useState, useEffect } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Switch from "react-switch";
import { categories } from "../../utils/categoryData";
import { motion, useAnimation } from "framer-motion";

const Categories = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [swiched, setSwiched] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();
  let containerWidth = windowWidth * 0.7;
  // Number of images to display per page based on the container's width
  const imagesPerPage = 10;

  // Calculate the index range for the current page
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const visibleImages = categories.slice(startIndex, endIndex);

  // Function to handle the "Next" button click
  const nextPage = () => {
    controls.start("exit");
    if (endIndex < categories.length) {
      setCurrentPage(currentPage + 1);
    }
    controls.start("animate");
  };

  // Function to handle the "Previous" button click
  const prevPage = () => {
    controls.start("exit");
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    controls.start("animate");
  };
  useEffect(() => {
    // Update the window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const iconVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      transition: { duration: 0.5 },
      opacity: 1,
      ease: "easeIn",
    },
    exit: { x: "-100%", transition: { duration: 0.5 }, opacity: 0 },
  };
  return (
    <div className='ml-[4%] mr-5 mt-10 overflow-hidden'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex gap-[30px]' style={{ width: containerWidth }}>
          {currentPage > 0 && (
            <div className='flex justify-center items-center mt-3 w-[30px] h-[30px] rounded-full border border-[#eee] border-solid border-1'>
              <PiCaretLeftBold onClick={prevPage} className='cursor-pointer' />
            </div>
          )}
          {visibleImages.map((image, index) => (
            <motion.div
              key={index}
              className='flex flex-col gap-2 w-[80px]'
              variants={iconVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <img
                key={index}
                src={image.icon.src}
                alt={image.title}
                width={24}
                height={24}
                className={`${index === 0 ? 'ml-5': 'ml-4'}`}
              />
              <small className={`text-[#8d8d8d] whitespace-nowrap text-[12px] ${index === 0 ? 'ml-3':null}`}>
                {image.title}
              </small>
            </motion.div>
          ))}
          {endIndex < categories.length && (
            <div className='flex justify-center items-center w-[30px] mt-3 h-[30px] rounded-full border border-[#eee] border-solid border-2'>
              <PiCaretRightBold onClick={nextPage} className='cursor-pointer' />
            </div>
          )}
        </div>
        <div className='flex gap-3'>
          <div className='flex gap-1 justify-center items-center rounded-[10px] border border-[#e2e2e2] w-[100px] h-[48px] border-solid border-1'>
            <img
              src='/filter.png'
              width={25}
              height={20}
              alt='filter icon'
              className='mt-1'
            />
            <small className='mt-1'>Filters</small>
          </div>
          <div className='pl-1 pr-1 flex gap-1 justify-center items-center rounded-[10px] border border-[#e2e2e2] h-[48px] border-solid border-1'>
            <small className='mt-1 whitespace-nowrap'>
              Display total before taxes
            </small>
            <Switch
              checked={swiched}
              onChange={(checked) => setSwiched(checked)}
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
