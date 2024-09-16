/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const VehiclesByCountyCard = ({ data }) => {
  const countyCount = data.reduce((acc, car) => {
    acc[car.County] = (acc[car.County] || 0) + 1;
    return acc;
  }, {});

  const sortedCounties = Object.entries(countyCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const topCounties = sortedCounties.map(([county, count]) => [county, count]);
  const othersCount = Object.entries(countyCount)
    .slice(10)
    .reduce((acc, [, count]) => acc + count, 0);

  if (othersCount > 0) {
    topCounties.push(["Others", othersCount]);
  }

  const chartData = [["County", "Number of Vehicles"], ...topCounties];

  const options = {
    title: "Vehicles by County",
    hAxis: {
      title: "Number of Vehicles",
      minValue: 0,
    },
    vAxis: {
      title: "County",
    },
    legend: { position: "none" },
  };

  return (
    <div className="card w-full flex-grow">
      <Chart
        chartType="BarChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"250px"}
      />
    </div>
  );
};

export default VehiclesByCountyCard;
