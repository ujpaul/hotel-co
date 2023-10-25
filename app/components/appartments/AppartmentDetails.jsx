"use client";
import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import Skeleton from "react-loading-skeleton";
import { FiShare } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"

const AppartmentDetails = ({ appartmentId }) => {
  const url = `https://653532fec620ba9358ec4162.mockapi.io/api/appartments/${appartmentId}`;
  const { data, isLoading } = useFetchData(["appartment-details"], url);
  if (isLoading) return <Skeleton count={4} />;
  return (
    <>
      <b className='text-[#222222] text-xl'>
        Lovely Studio with Khalifa views from Balcony
      </b>
      <div className='flex justify-between flex-wrap my-4'>
        <div className='flex justify-between'>
          <AiFillStar className='mt-1' />
          <span className='text[#2b2b2b]'>{data?.stars}</span>
          <span className='underline ml-2'>25 reviews</span>
          <span className='ml-2'>{`${data?.location},${data?.country}`}</span>
        </div>
        <div className='flex'>
          <div className='flex gap-3'>
            <FiShare className='mt-[5px]' width={15} height={17} />
            <span className='underline mr-2'>Share</span>
          </div>
          <div className='flex gap-3'>
            <AiOutlineHeart className='mt-[5px]' />
            <span className='underline'>Save</span>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-3 mt-4'>
        <div className='w-[48%] h-[310px] full-width'>
          <img
            src={data?.images[0]}
            className='w-full h-full object-cover rounded-lg'
            alt='img-1'
          />
        </div>
        <div className='w-[50%] h-[300px] full-width flex flex-col gap-2'>
          <div className='flex gap-2 h-[150px]'>
            <img
              src={data?.images[0]}
              className='w-full h-full object-cover'
              alt='img-1'
            />
            <img
              src={data?.images[1]}
              className='w-full h-full object-cover rounded-tr-lg'
              alt='img-2'
            />
          </div>
          <div className='flex gap-2 h-[150px]'>
            <img
              src={data?.images[2]}
              className='w-full h-full object-cover'
              alt='img-3'
            />
            <img
              src={data?.images[3]}
              className='w-full h-full object-fill rounded-br-lg'
              alt='img-4'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppartmentDetails;
