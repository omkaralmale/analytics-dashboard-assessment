/* eslint-disable react/prop-types */
const MostCommonMakeCard = ({ data }) => {
  const makeCount = data?.reduce((acc, car) => {
    acc[car.Make] = (acc[car.Make] || 0) + 1;
    return acc;
  }, {});
  const mostCommonMake = Object.keys(makeCount).reduce((a, b) =>
    makeCount[a] > makeCount[b] ? a : b
  );
  return (
    <div className="card border flex flex-grow w-max h-20 bg-white gap-2">
      <div>
        <img
          src="https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg"
          className="w-20 h-full object-cover"
        />
      </div>
      <div className="text-center flex-grow py-2 mx-2">
        <h3 className=" text-md">Common Manufacture</h3>
        <p className="font-bold text-xl ">{mostCommonMake}</p>
      </div>
    </div>
  );
};
export default MostCommonMakeCard;
