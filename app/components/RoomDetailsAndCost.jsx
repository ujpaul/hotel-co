import { IoIosBed } from "react-icons/io";
import { FaShower } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
// import { Button } from "@material-tailwind/react";

const details = [
  {
    detail: "Shared bathroom",
    subDetail: "",
    icon: <FaShower />,
  },
  {
    detail: "Host or others",
    subDetail: "may share home",
    icon: <ImHome />,
  },
  {
    detail: "9 bedrooms",
    subDetail: "9 queen beds",
    icon: <IoIosBed />,
  },
];

const RoomDetailsAndCost = () => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col w-[60%]'>
        <div className='flex justify-between mt-3'>
          <h4>Room in A beautiful city</h4>
          <img src='/avatar.webp' className='w-[40px] h-[40px] rounded-full' />
        </div>
        <div className='flex gap-3'>
          {details.map((detail, index) => (
            <div
              key={index}
              className='flex gap-3 rounded-lg justify-center
           items-center border border-1 border-[#e9e9e9] px-5 py-3 mt-5'
            >
              {detail.icon}
              <div className='flex flex-col'>
                <small>{detail.detail}</small>
                <small>{detail.subDetail}</small>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full h-[1px] bg-[#e9e9e9] mt-4' />
        <div className='flex flex-col gap-4 mt-4'>
          <div className='flex gap-5'>
            <ImHome className='mt-3' />
            <div className='flex flex-col'>
              <b>Room in a farm</b>
              <span>Your own room in a home, plus access to shared spaces</span>
            </div>
          </div>
          <div className='flex gap-5'>
            <FaShower className='mt-3' />
            <div className='flex flex-col'>
              <b>Furry friends welcome</b>
              <span>Bring your pets along for the stay.</span>
            </div>
          </div>
          <div className='flex gap-5'>
            <IoIosBed className='mt-1' />
            <b>Free cancellation before October 31</b>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#e9e9e9] mt-4 mb-4' />
      </div>
      <div className='rounded-lg mb-4 p-4 border border-1 border-[#e9e9e9] shadow-lg w-[30%] mt-4 ml-[8%]'>
        <b>$15</b>
        <span className='ml-1'>night</span>
        <div className='rounded-lg p-4 border border-1 border-[#e9e9e9] mt-4'>
          <div className='flex'>
            <div className='flex flex-col'>
              <small>
                <b>CHECK-IN</b>
              </small>
              <small>21/10/2023</small>
            </div>
            <div className='flex gap-2 ml-[30%]'>
              <div className='h-full w-[1px] bg-[#e9e9e9]' />
              <div className='flex flex-col'>
                <small>
                  <b>CHECK-IN</b>
                </small>
                <small>26/10/2023</small>
              </div>
            </div>
          </div>
        </div>
        <button className='bg-[#df1561] rounded-lg mt-5 w-full h-[50px] text-white'>
          Reserve
        </button>
        <div className='flex justify-center my-4'>
          <span>You won't be charged yet</span>
        </div>
        <div className='flex justify-between mx-3'>
          <span className='underline'>$15 x 5 nights</span>
          <span>$75</span>
        </div>
        <div className='flex justify-between mx-3 my-3'>
          <span className='underline'>Airbnb service fee</span>
          <span>$11</span>
        </div>
        <div className='w-full h-[1px] bg-[#e9e9e9] mx-3 my-3' />
        <div className='flex justify-between mx-3'>
          <b>Total before taxes</b>
          <b>$86</b>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsAndCost;
