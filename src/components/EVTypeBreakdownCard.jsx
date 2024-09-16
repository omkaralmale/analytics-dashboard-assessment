/* eslint-disable react/prop-types */
const EVTypeBreakdownCard = ({ data }) => {
  const totalVehicles = data?.length;
  const evTypeCount = data?.reduce((acc, car) => {
    acc[car["Electric Vehicle Type"]] =
      (acc[car["Electric Vehicle Type"]] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="card text-center flex flex-wrap flex-grow  gap-3">
      <div className="card text-center border bg-white flex w-60 h-20 flex-grow gap-5">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/04/26/96/71/360_F_426967161_ixbl8OdU9XMpsHTqqsps2HhJI3t0Rwp0.jpg"
            className="min-w-20 w-20 px-1 h-full object-cover border-r"
          />
        </div>
        <div className="text-center py-2 w-full flex-grow mx-2">
          <h3 className="w-full text-md">BEV</h3>
          <p className="font-bold text-xl ">
            {evTypeCount["Battery Electric Vehicle (BEV)"]}
          </p>
          <p className=" text-[0.7rem]">
            {(evTypeCount["Battery Electric Vehicle (BEV)"] / totalVehicles) *
              100}
            %
          </p>
        </div>
      </div>
      <div className="card border text-center flex flex-grow w-60 h-20 bg-white gap-2">
        <div>
          <img
            src="https://images.ctfassets.net/2sam6k0rncvg/5F07Osc7EckXD6oPY6nO6r/3d9c3f475c8d52941ae52592a84ede01/hybrid-electric-vehicles.png"
            className="min-w-20 w-20 h-full object-cover border-r"
          />
        </div>
        <div className="text-center w-full flex-grow py-2 mx-2">
          <h3 className="w-full text-md">PHEV</h3>
          <p className="font-bold text-xl ">
            {evTypeCount["Plug-in Hybrid Electric Vehicle (PHEV)"]}
          </p>
          <p className=" text-[0.7rem]">
            {(evTypeCount["Plug-in Hybrid Electric Vehicle (PHEV)"] /
              totalVehicles) *
              100}
            %
          </p>
        </div>
      </div>
    </div>
  );
};
export default EVTypeBreakdownCard;
