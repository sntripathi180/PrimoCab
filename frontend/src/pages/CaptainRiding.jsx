import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride


    useGSAP(function(){
  if(finishRidePanel){
    gsap.to(finishRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(finishRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[finishRidePanel])


  return (
   <div className="h-screen relative flex flex-col justify-end">
   
      <div className="fixed p-6 top-0  flex items-center justify-between w-screen">
        <img className="w-16" src="./logo.png" alt="" />
        <Link
          to="/captain-home"
          className=" h-8 w-8 bg-white flex items-center justify-center rounded-full border-2 border-gray-400"
        >
          <img className="text-sm font-medium " src="./exit.png" alt="home" />
        </Link>
      </div>

      <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10"
      onClick={()=>{
        setFinishRidePanel(true)
      }}
      >
      
       <h5
        className="p-1 text-center w-[90%] absolute top-0 "
        onClick={() => {
          
        }}
      >
        <i className="text-2xl text-gray-400 ri-arrow-up-wide-line"></i>
      </h5>
      <h4 className='text-xl font-semibold'>4 KM away</h4>
      <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>

      </div>
      <div ref={finishRidePanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12'>
          <FinishRide
          ride={rideData}
          setFinishRidePanel={setFinishRidePanel}/>
      </div>

      <div className='h-screen fixed top-0 z-[-1]'>
        <LiveTracking/>
      </div>
       
    </div>
  )
}

export default CaptainRiding