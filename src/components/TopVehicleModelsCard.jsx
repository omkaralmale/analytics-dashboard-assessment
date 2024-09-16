/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const TopVehicleModelsCard = ({ data }) => {
  const modelCount = data.reduce((acc, car) => {
    acc[car.Model] = (acc[car.Model] || 0) + 1;
    return acc;
  }, {});

  const sortedModels = Object.entries(modelCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const chartData = [["Model", "Number of Vehicles"], ...sortedModels];

  const options = {
    title: "Top 10 Vehicle Models",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Number of Vehicles",
      minValue: 0,
      fontSize: 12,
    },
    vAxis: {
      title: "Model",
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

export default TopVehicleModelsCard;
