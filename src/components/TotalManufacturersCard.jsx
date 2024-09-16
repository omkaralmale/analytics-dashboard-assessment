/* eslint-disable react/prop-types */
const TotalManufacturersCard = ({ data }) => {
  const manufacturers = [...new Set(data?.map((car) => car.Make))];
  return (
    <div className="card border h-20 flex flex-grow w-max min-w-60 bg-white gap-2">
      <div>
        <img
          src="https://media.designrush.com/articles/1651/conversions/_1526480503_147_car-preview.jpg"
          className="w-20 h-full object-cover"
        />
      </div>
      <div className="text-center flex-grow py-2 mx-2">
        <h3 className="text-md">Total Manufacturer</h3>
        <p className="font-bold text-xl ">{manufacturers.length}</p>
      </div>
    </div>
  );
};
export default TotalManufacturersCard;
