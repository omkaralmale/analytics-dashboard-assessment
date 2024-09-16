import AverageElectricRangeCard from "../components/AverageElectricRangeCard";
import AverageVehicleAgeCard from "../components/AverageVehicleAgeCard";
import CAFVEligibilityCard from "../components/CAFVEligibilityCard";
import ElectricRangeDistributionCard from "../components/ElectricRangeDistributionCard";
import EVAdoptionPredictionCard from "../components/EVAdoptionPredictionCard";
import EVTypeBreakdownCard from "../components/EVTypeBreakdownCard";
import MostCommonMakeCard from "../components/MostCommonMakeCard";
import RevenueForecastCard from "../components/RevenueForecastCard";
import TopElectricUtilityProvidersCard from "../components/TopElectricUtilityProvidersCard";
import TopVehicleModelsCard from "../components/TopVehicleModelsCard";
import TotalManufacturersCard from "../components/TotalManufacturersCard";
import TotalVehiclesCard from "../components/TotalVehiclesCard";
import VehiclesByCountyCard from "../components/VehicleByCountry";
import VehiclesByYearCard from "../components/VehiclesByYearCard";
import ZeroEmissionZonesImpactCard from "../components/ZeroEmissionZonesImpactCard";
import data from "../utils/csvjson.json";
console.log(data.length);

const Dashboard = () => {
  return (
    <div className="bg-indigo-50 w-screen h-max p-4 ">
      {/* ALL MINI CARDS  */}
      <div className="flex flex-wrap gap-2 my-2 rounded-lg">
        <TotalVehiclesCard data={data} />
        <TotalManufacturersCard data={data} />
        <AverageElectricRangeCard data={data} />
        <MostCommonMakeCard data={data} />
        <EVTypeBreakdownCard data={data} />
        <AverageVehicleAgeCard data={data} />
      </div>

      {/* ALL PIE CHARTS */}
      <div className="w-full flex flex-wrap gap-5 py-3">
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <TopElectricUtilityProvidersCard data={data} />
        </div>
        <div className="w-full flex-grow  sm:w-1/2 lg:w-1/4">
          <CAFVEligibilityCard data={data} />
        </div>
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <ZeroEmissionZonesImpactCard data={data} />
        </div>
      </div>

      {/* YEAR GRAPH */}
      <div className="w-full">
        <VehiclesByYearCard data={data} />
      </div>

      {/* OTHER GRAPHS */}
      <div className="w-full flex flex-wrap gap-5 py-3">
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <VehiclesByCountyCard data={data} />
        </div>
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <ElectricRangeDistributionCard data={data} />
        </div>
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <TopVehicleModelsCard data={data} />
        </div>
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <RevenueForecastCard data={data} />
        </div>
        <div className="w-full flex-grow sm:w-1/2 lg:w-1/4">
          <EVAdoptionPredictionCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
