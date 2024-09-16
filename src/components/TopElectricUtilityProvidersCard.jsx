/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const TopElectricUtilityProvidersPieChart = ({ data }) => {
  const utilityCount = data?.reduce((acc, car) => {
    const utilities = car["Electric Utility"];
    if (utilities) {
      const utilityList = utilities.includes("|")
        ? utilities.split("|")
        : [utilities];
      utilityList.forEach((utility) => {
        const trimmedUtility = utility.trim();
        if (trimmedUtility) {
          acc[trimmedUtility] = (acc[trimmedUtility] || 0) + 1;
        }
      });
    }
    return acc;
  }, {});

  const sortedUtilities = Object.entries(utilityCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const chartData = [
    ["Electric Utility", "Number of Vehicles"],
    ...sortedUtilities.map(([utility, count]) => [utility, count]),
  ];

  const options = {
    title: "Top 10 Electric Utility Providers ",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div className="chart-container w-full flex-grow">
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

export default TopElectricUtilityProvidersPieChart;
