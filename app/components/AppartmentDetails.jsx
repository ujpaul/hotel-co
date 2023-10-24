"use client";
import { useFetchData } from '../api/hooks/useFetchData'
import Skeleton from 'react-loading-skeleton';

const AppartmentDetails = ({ appartmentId }) => {
    const url = `https://653532fec620ba9358ec4162.mockapi.io/api/appartments/${appartmentId}`;
    const { data, isLoading } = useFetchData(["appartment-details"], url)
    if (isLoading) return <Skeleton count={4} />
  return (
    <>
      <div className='flex gap-3 mt-4'>
        <div className='w-[50%] h-[310px]'>
          <img
            src={data?.images[0]}
            className='w-full h-full object-cover rounded-lg'
            alt='img-1'
          />
        </div>
        <div className='w-[50%] h-[300px] flex flex-col gap-2'>
          <div className='flex gap-2 h-[150px]'>
            <img
              src={data?.images[0]}
              className='w-full h-full object-cover rounded-lg'
              alt='img-1'
            />
            <img
              src={data?.images[1]}
              className='w-full h-full object-cover rounded-lg'
              alt='img-2'
            />
          </div>
          <div className='flex gap-2 h-[150px]'>
            <img
              src={data?.images[2]}
              className='w-full h-full object-cover rounded-lg'
              alt='img-3'
            />
            <img
              src={data?.images[3]}
              className='w-full h-full object-cover rounded-lg'
              alt='img-4'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppartmentDetails