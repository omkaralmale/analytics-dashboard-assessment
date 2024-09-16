/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const CAFVEligibilityCard = ({ data }) => {
  const eligibilityCount = data.reduce((acc, car) => {
    const status = car["Clean Alternative Fuel Vehicle (CAFV) Eligibility"];
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    ["Eligibility Status", "Number of Vehicles"],
    ...Object.entries(eligibilityCount),
  ];

  const options = {
    title: "CAFV Eligibility Breakdown",
    pieHole: 0.4,
    is3D: false,
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

export default CAFVEligibilityCard;
