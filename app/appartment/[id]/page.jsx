import AppartmentDetails from '@/app/components/AppartmentDetails';
import RoomDetailsAndCost from '@/app/components/RoomDetailsAndCost';

const Appartment = ({ params: { id } }) => {
  return (
    <div className='ml-[10%] mr-[10%]'>
      <AppartmentDetails appartmentId={id} />
      <RoomDetailsAndCost />
    </div>
  );  
}

export default Appartment