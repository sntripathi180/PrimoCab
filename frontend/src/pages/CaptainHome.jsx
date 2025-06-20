import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
const [ridePopupPanel, setRidePopupPanel] = useState(true)
const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

const ridePopupPanelRef = useRef(null)
const confirmRidePopupPanelRef = useRef(null)


useGSAP(function(){
  if(ridePopupPanel){
    gsap.to(ridePopupPanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(ridePopupPanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[ridePopupPanel])

useGSAP(function(){
  if(confirmRidePopupPanel){
    gsap.to(confirmRidePopupPanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confirmRidePopupPanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[confirmRidePopupPanel])


  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0  flex items-center justify-between w-screen">
        <img className="w-16" src="./logo.png" alt="" />
        <Link
          to="/home"
          className=" h-8 w-8 bg-white flex items-center justify-center rounded-full border-2 border-gray-400"
        >
          <img className="text-sm font-medium " src="./exit.png" alt="home" />
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src="./map.png" alt="" />
      </div>
      <div className="h-2/5 p-4">
       <CaptainDetails/>
      </div>
       <div ref={ridePopupPanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12'>
          <RidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12 h-screen'>
          <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel}  setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
