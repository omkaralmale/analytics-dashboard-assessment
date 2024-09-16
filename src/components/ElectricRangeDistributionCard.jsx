/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const ElectricRangeDistributionCard = ({ data }) => {
  const rangeBuckets = {
    "0-100 miles": 0,
    "101-200 miles": 0,
    "201-300 miles": 0,
    "301+ miles": 0,
  };

  data.forEach((car) => {
    const range = car["Electric Range"];
    if (range <= 100) rangeBuckets["0-100 miles"]++;
    else if (range <= 200) rangeBuckets["101-200 miles"]++;
    else if (range <= 300) rangeBuckets["201-300 miles"]++;
    else rangeBuckets["301+ miles"]++;
  });

  const chartData = [
    ["Electric Range", "Number of Vehicles"],
    ...Object.entries(rangeBuckets),
  ];

  const options = {
    title: "Electric Range Distribution",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Number of Vehicles",
      minValue: 0,
    },
    vAxis: {
      title: "Electric Range",
    },
    bars: "horizontal",
    legend: { position: "none" },
    colors: ["#4caf50"],
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

export default ElectricRangeDistributionCard;
