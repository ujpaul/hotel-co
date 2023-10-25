import AppartmentDetails from "@/app/components/appartments/AppartmentDetails";
import RoomDetailsAndCost from "@/app/components/appartments/RoomDetailsAndCost";

const Appartment = ({ params: { id } }) => {
  return (
    <div className='ml-[10%] mr-[10%]'>
      <AppartmentDetails appartmentId={id} />
      <RoomDetailsAndCost />
    </div>
  );
};

export default Appartment;
