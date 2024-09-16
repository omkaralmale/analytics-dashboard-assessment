/* eslint-disable react/prop-types */
const VehiclesByLegislativeDistrictCard = ({ data }) => {
  const districtCount = data?.reduce((acc, car) => {
    acc[car["Legislative District"]] =
      (acc[car["Legislative District"]] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="card">
      <h3>Vehicles by Legislative District</h3>
      <ul>
        {Object.keys(districtCount).map((district) => (
          <li key={district}>
            District {district}: {districtCount[district]} vehicles
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehiclesByLegislativeDistrictCard;
