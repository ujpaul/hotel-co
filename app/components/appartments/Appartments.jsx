"use client";
import React, { Fragment } from "react";
import { useFetchInfiniteQueriesPage } from "../../hooks/useFetchData";
import { Carousel } from "@material-tailwind/react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
const Appartments = () => {
  // Fetch appartments data
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useFetchInfiniteQueriesPage();
  if (isLoading)
    return (
      <SkeletonTheme baseColor='#f7f7f7' highlightColor='#444'>
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    );
  return (
    <>
      <InfiniteScroll
        dataLength={data ? data.pages.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <SkeletonTheme baseColor='#f7f7f7' highlightColor='#444'>
            <p>
              <Skeleton count={5} />
            </p>
          </SkeletonTheme>
        }
      >
        <div className='flex flex-wrap gap-2 ml-[4%] mt-2 mb-3'>
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {data?.pages[index].map((appartment) => (
                <div key={appartment.id} className='flex flex-col'>
                  <Carousel className='rounded-xl mt-3 ml-3 w-[337px] h-[320px] relative'>
                    {appartment.images?.map((image, index) => (
                      <Link key={index} href={`/appartment/${appartment.id}`}>
                        <img
                          src={image}
                          alt={`image-${index + 1}`}
                          className='h-full w-full object-cover'
                        />
                      </Link>
                    ))}
                    <img
                      src='/heart.png'
                      width={27}
                      height={24}
                      className='absolute right-[10px] top-[10px] '
                      alt='heart icon'
                    />
                  </Carousel>
                  <Link href={`/appartment/${appartment.id}`}>
                    <div className='flex justify-between ml-4 mt-2'>
                      <b>{`${appartment.location},${appartment.country}`}</b>
                      <div className='flex gap-1 ml-4'>
                        <AiFillStar
                          className='mt-1'
                        />
                        <span className='text[#2b2b2b] cursor-pointer'>
                          {appartment.stars}
                        </span>
                      </div>
                    </div>
                    <span className='text-[#8d8d8d] ml-4'>
                      {appartment.availability}
                    </span>
                    <div className='flex gap-1 ml-4'>
                      <b>{`$${appartment.cost}`}</b>
                      <span className='text[#222222]'>night</span>
                    </div>
                  </Link>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </InfiniteScroll>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-2'>
          <b>Continue exploring countryside</b>
          <button className='ml-10 bg-[#222222] rounded-lg mt-5 w-[136px] h-[48px] text-white mb-3'>
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default Appartments;
