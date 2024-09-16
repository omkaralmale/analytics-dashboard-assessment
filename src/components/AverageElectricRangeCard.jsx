/* eslint-disable react/prop-types */
const AverageElectricRangeCard = ({ data }) => {
  const totalRange = data?.reduce((acc, car) => acc + car["Electric Range"], 0);
  const averageRange = totalRange / data.length;
  return (
    <div className="card border flex flex-grow w-max h-20 bg-white gap-2">
      <div>
        <img
          src="https://websiteimages.leasingoptions.co.uk/news/blog/electric-and-hybrid-dashboard-symbols-6096/4_1200.jpg"
          className="w-20 h-full object-cover"
        />
      </div>
      <div className="text-center flex-grow py-2 mx-2">
        <h3 className="text-md">Average Electric Range</h3>
        <p className="font-bold text-xl ">{Math.round(averageRange)} miles</p>
      </div>
    </div>
  );
};
export default AverageElectricRangeCard;
