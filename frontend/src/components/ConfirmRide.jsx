import React from "react";

const ConfirmRide = (props) => {
   const vehicleImages = {
    car: "/car.png",
    moto: "/bike.png",
    auto: "/taxi.png",
     
  };

  const selectedVehicleImg = vehicleImages[props.vehicleType] || "/default.png";

  return (
    <div className="mb-2">
      <h5
        className="p-3 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-2xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex justify-between flex-col items-center">
        <img className="h-20" src={selectedVehicleImg} alt={props.vehicleType} />

        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-user-location-line"></i>
            <div>
              <h3 className="text-lg font-medium">Source</h3>
              <p className="text-sm -mt-1 text-gray-600 ">{props.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                ₹{props.fare[props.vehicleType]}
              </h3>
              <p className="text-sm -mt-1 text-gray-600 ">CASH only</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
            props.createRide();
          }}
          className="w-full bg-green-400 text-white font-semibold p-2 rounded-lg mt-5"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
