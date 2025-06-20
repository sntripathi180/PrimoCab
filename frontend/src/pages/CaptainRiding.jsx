import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

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
   <div className="h-screen relative">
   
      <div className="fixed p-6 top-0  flex items-center justify-between w-screen">
        <img className="w-16" src="./logo.png" alt="" />
        <Link
          to="/home"
          className=" h-8 w-8 bg-white flex items-center justify-center rounded-full border-2 border-gray-400"
        >
          <img className="text-sm font-medium " src="./exit.png" alt="home" />
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src="./map.png" alt="" />
      </div>
      <div className="h-1/5 p-1 bg-yellow-400 flex items-center justify-between relative " onClick={()=>{
        setFinishRidePanel(true)
      }}>
       <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          
        }}
      >
        <i className="text-2xl text-gray-400 ri-arrow-up-wide-line"></i>
      </h5>
      <h4 className='text-xl font-semibold'>4 KM away</h4>
      <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>

      </div>
      <div ref={finishRidePanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
       
    </div>
  )
}

export default CaptainRiding