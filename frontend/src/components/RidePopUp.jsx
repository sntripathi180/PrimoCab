import React from "react";

const RidePopUp = (props) => {
  return (
    <div >
      <h5
        className="p-3 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-2xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New ride available!</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="./driver.jpg"
            alt="user"
          />
          {/* console.log("User first name":{props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}) */}
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-user-location-line"></i>
            <div>
              <h3 className="text-lg font-medium">Source</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹ {props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">CASH only</p>
            </div>
          </div>
        </div>
        <div className="flex mt-5 w-full items-center justify-between">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
              props.confirmRide();
            }}
            className=" bg-green-400 text-white font-semibold rounded-lg  px-8 p-3"
          >
            Accept
          </button>
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className=" bg-gray-300 text-gray-700 font-semibold  rounded-lg  px-8 p-3"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
