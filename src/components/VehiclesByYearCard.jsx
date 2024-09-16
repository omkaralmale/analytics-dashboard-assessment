/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const VehiclesByYearCard = ({ data }) => {
  const yearCount = data.reduce((acc, car) => {
    acc[car["Model Year"]] = (acc[car["Model Year"]] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    ["Model Year", "Number of Vehicles"],
    ...Object.entries(yearCount).sort((a, b) => a[0] - b[0]),
  ];

  const options = {
    title: "Vehicles by Model Year",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      title: "Model Year",
      titleTextStyle: { color: "#333" },
    },
    vAxis: {
      title: "Number of Vehicles",
      titleTextStyle: { color: "#333" },
    },
  };

  return (
    <div className="card w-full flex-grow">
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width={"auto"}
        height={"300px"}
      />
    </div>
  );
};

export default VehiclesByYearCard;
