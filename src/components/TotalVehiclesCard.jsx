/* eslint-disable react/prop-types */
const TotalVehiclesCard = ({ data }) => {
  return (
    <div className="card border flex flex-grow h-20 w-60 bg-white gap-2">
      <div>
        <img
          src="https://www.infinity-group.in/wp-content/uploads/2021/07/5-Benefits-of-Buying-A-Pre-Owned-Luxury-Car.jpg"
          className="w-20 h-full object-cover"
        />
      </div>
      <div className="text-center py-2 flex-grow mx-2">
        <h3 className=" text-md">Total Vehicles</h3>
        <p className="font-bold text-xl ">{data.length}</p>
      </div>
    </div>
  );
};
export default TotalVehiclesCard;
