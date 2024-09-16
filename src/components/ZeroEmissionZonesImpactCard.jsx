/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const ZeroEmissionZonesImpactCard = ({ data }) => {
  const zeroEmissionZones = ["Seattle", "Tacoma"];
  const carsInZones = data.filter((car) =>
    zeroEmissionZones.includes(car.City)
  );
  const carsOutsideZones = data.length - carsInZones.length;

  const chartData = [
    ["Location", "Number of Vehicles"],
    ["In Zero Emission Zones", carsInZones.length],
    ["Outside Zero Emission Zones", carsOutsideZones],
  ];

  const options = {
    title: "Cars in Zero Emission Zones vs Outside",
    pieHole: 0.4,
    is3D: false,
    colors: ["#4caf50", "#f44336"],
  };

  return (
    <div className="card w-full flex-grow">
      <Chart
        chartType="PieChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"250px"}
      />
    </div>
  );
};

export default ZeroEmissionZonesImpactCard;
