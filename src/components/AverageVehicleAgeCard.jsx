/* eslint-disable react/prop-types */

const AverageVehicleAgeCard = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const totalAge = data.reduce(
    (acc, car) => acc + (currentYear - car["Model Year"]),
    0
  );
  const averageAge = totalAge / data.length;

  return (
    <div className="card  border flex flex-grow h-20 w-60 bg-white gap-2">
      <div>
        <img
          src="https://media.istockphoto.com/id/2149895112/vector/car-insurance-solid-icon-that-can-be-applied-anywhere-simple-pixel-perfect-and-modern-style.jpg?b=1&s=170x170&k=20&c=dxMTlbxHNy5W3HetT6LZv3IfrkESxJCMyCyaeYhIebM="
          className="w-20 h-full object-cover"
        />
      </div>
      <div className="text-center py-2 flex-grow mx-2">
        <h3 className=" text-md">Average Car Age</h3>
        <p className="font-bold text-xl ">{averageAge.toFixed(2)} Yrs</p>
      </div>
    </div>
  );
};

export default AverageVehicleAgeCard;
