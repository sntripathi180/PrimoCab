import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
const [otp, setOtp] = useState('')
const navigate = useNavigate()

    const submitHandler =async (e)=>{
        e.preventDefault()
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`,{
          params:{
            rideId: props.ride._id,
            otp:otp
          },
          headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
          }

        })

        if(response.status === 200){
          props.setConfirmRidePopupPanel(false)
          props.setRidePopupPanel(false)
          navigate('/captain-riding',{state:{ride: props.ride}})
        }
    }
  return (
    <div >
      <h5
        className=" text-center w-full absolute top-0 "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-2xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold ">
        Confirm this ride to Start!!
      </h3>

      <div className="flex items-center justify-between mt-2 p-3 bg-yellow-300 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="./driver.jpg"
            alt="user"
          />
          <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex justify-between flex-col items-center">
        <div className="w-full ">
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-user-location-line"></i>
            <div>
              <h3 className="text-lg font-medium">Source</h3>
              <p className="text-sm -mt-1 text-gray-600 ">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600 ">{props.ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">CASH only</p>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <form onSubmit={submitHandler}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" placeholder="Enter OTP" className='bg-[#eee] px-6 py-1 text-lg rounded-lg w-full  mt-3 font-mono' />
          
             <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
                       
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full bg-red-400 text-white font-semibold p-2 rounded-lg mt-1"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
