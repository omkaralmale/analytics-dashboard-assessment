/* eslint-disable react/prop-types */
import { Chart } from "react-google-charts";

const RevenueForecastCard = ({ data }) => {
  const baseMsrpAverage =
    data.reduce((acc, car) => acc + car["Base MSRP"], 0) / data.length;
  const currentYearSales = data.filter(
    (car) => car["Model Year"] === new Date().getFullYear()
  ).length;

  const growthRate = 0.05;
  const futureYears = [...Array(5)].map(
    (_, i) => new Date().getFullYear() + i + 1
  );
  const predictedRevenue = futureYears.map((year) =>
    Math.round(
      currentYearSales *
        (1 + growthRate) ** (year - new Date().getFullYear()) *
        baseMsrpAverage
    )
  );

  const chartData = [
    ["Year", "Projected Revenue"],
    ...futureYears.map((year, i) => [String(year), predictedRevenue[i]]),
  ];

  const options = {
    title: "Revenue Forecast (Next 5 Years)",
    hAxis: { title: "Year" },
    vAxis: { title: "Revenue ($)", format: "short" },
    colors: ["#43a047"],
    legend: { position: "none" },
    bar: { groupWidth: "75%" },
  };

  return (
    <div className="card w-full flex-grow">
     
      <Chart
        chartType="BarChart"
        data={chartData}
        options={options}
        width="100%"
        height="250px"
      />
    </div>
  );
};

export default RevenueForecastCard;
