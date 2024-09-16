/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const EVAdoptionPredictionCard = ({ data }) => {
  const yearCounts = data.reduce((acc, car) => {
    acc[car["Model Year"]] = (acc[car["Model Year"]] || 0) + 1;
    return acc;
  }, {});

  const years = Object.keys(yearCounts).sort((a, b) => a - b);
  const growthRates = [];
  for (let i = 1; i < years.length; i++) {
    const growth =
      ((yearCounts[years[i]] - yearCounts[years[i - 1]]) /
        yearCounts[years[i - 1]]) *
      100;
    growthRates.push(growth);
  }

  const avgGrowthRate =
    growthRates.reduce((a, b) => a + b, 0) / growthRates.length;

  const futureYears = [...Array(5)].map(
    (_, i) => Number(years[years.length - 1]) + i + 1
  );
  const predictedCounts = futureYears.map((year) =>
    Math.round(
      yearCounts[years[years.length - 1]] *
        (1 + avgGrowthRate / 100) ** (year - years[years.length - 1])
    )
  );

  const chartData = [
    ["Year", "Vehicles"],
    ...years.map((year) => [year, yearCounts[year]]),
    ...futureYears.map((year, i) => [String(year), predictedCounts[i]]),
  ];

  const options = {
    title: "EV Adoption Prediction (Next 5 Years)",
    hAxis: { title: "Year" },
    vAxis: { title: "Number of Vehicles" },
    legend: { position: "none" },
    colors: ["#1e88e5"],
    lineWidth: 2,
    pointSize: 5,
  };

  return (
    <div className="card w-full flex-grow">
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width={"100%"}
        height={"250px"}
      />
    </div>
  );
};

export default EVAdoptionPredictionCard;
