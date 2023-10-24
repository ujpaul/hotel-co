import { BsSearch } from 'react-icons/bs'
const Search = () => {
  return (
    <>
      <div className='flex justify-center mt-4'>
        <div
          className='flex mt-3 w-[60%] h-[66px] relative rounded-full 
      border border-[#eee] border-solid border-1 p-2 shadow'
        >
          <div className='flex flex-col ml-4 mt-1'>
            <small className='text-[#000]'>Where</small>
            <span className='text-[#8d8d8d]'>Search destinations</span>
          </div>
          <div className='h-[30px] w-[1px] bg-[#dddddd] ml-[200px] mt-3' />
          {/* <div className='ml-1 h-[100%] rounded-full hover:bg-gray-500 hover:scale-105 cursor-pointer'></div> */}
          <div className='flex flex-col ml-6 mt-1'>
            <small className='text-[#000]'>Check in</small>
            <span className='text-[#8d8d8d]'>Add dates</span>
          </div>
          <div className='h-[30px] w-[1px] bg-[#dddddd] ml-6  mt-3' />
          <div className='flex flex-col ml-6 mt-1'>
            <small className='text-[#000]'>Check out</small>
            <span className='text-[#8d8d8d]'>Add dates</span>
          </div>
          <div className='h-[30px] w-[1px] bg-[#dddddd] ml-6  mt-3' />
          <div className='flex flex-col ml-6 mt-1'>
            <small className='text-[#000]'>Who</small>
            <span className='text-[#8d8d8d]'>Add guests</span>
          </div>
          <div
            className='flex justify-center items-center w-[45px] 
        h-[45px] bg-[#ff385c] rounded-full mb-3 absolute right-[10px] cursor-pointer'
          >
            <BsSearch className='text-[#FFF]' />
          </div>
        </div>
      </div>
      <div className='w-[100%] h-[1px] bg-[#ebebeb] mt-10' />
    </>
  );
}

export default Search