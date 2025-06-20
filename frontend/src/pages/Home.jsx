import React, { useState } from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDrivers from '../components/LookingForDrivers';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
const [pickUp, setPickUp] = useState('')
const [destination, setDestination] = useState('')
const [panelOpen, setPanelOpen] = useState(false)
const panelRef = useRef(null)
const vehiclePanelRef = useRef(null)
const confirmRidePanelRef = useRef(null)
const panelCloseRef = useRef(null)
const vehicleFoundRef = useRef(null)
const waitingForDriverRef = useRef(null)
const [vehiclePanelOpen,setVehiclePanelOpen] = useState(false)
const [confirmRidePanel,setConfirmRidePanel] = useState(false)
const [vehicleFound,setVehicleFound] = useState(false)
const [waitingForDriver, setwaitingForDriver] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  useGSAP(function  () {
    if(panelOpen){
      gsap.to(panelRef.current, {height: '70%'})
      gsap.to(panelCloseRef.current, {opacity: 1})
    }
    else{ 
      gsap.to(panelRef.current, {height: '0%'})
      gsap.to(panelCloseRef.current, {opacity: 0})
    }
  }, [panelOpen]
  )
useGSAP(function(){
  if(vehiclePanelOpen){
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[vehiclePanelOpen])
 
useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
},[confirmRidePanel])
useGSAP(function(){
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
},[vehicleFound])

useGSAP(function(){
  if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(waitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
},[waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img  className='w-16 absolute' src="/logo.png" alt="logo" />
      <div  className='w-screen h-screen '>
        <img className='h-full w-full object-cover' src="/map.png" alt="map" />
      </div>
      <div className= 'flex flex-col justify-end h-screen absolute top-0  w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
       <h4 ref={panelCloseRef}   onClick={(e)=>{setPanelOpen(false)}} className='opacity-0 absolute top-6 right-4 text-2xl'>
         <i className="ri-arrow-down-wide-line">
          </i></h4>
        <h4 className='text-3xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {
         submitHandler(e)
        }
        }>
          <div className='line absolute h-16 w-1 top-[45%] left-8 bg-gray-600 rounded-full'></div>
          <input 
          onClick={() => setPanelOpen(!panelOpen)}
          value={pickUp}
          onChange={(e) => setPickUp(e.target.value)}
          className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5'
          type='text ' 
          placeholder='Add a pick-up location'
          ></input>
          <input
           onClick={() => setPanelOpen(!panelOpen)} 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full  mt-3' 
          type='text' 
          placeholder='Enter your destination'
          ></input>
        </form>
        </div>
        
        <div ref={panelRef} className='h-0 bg-white '>
                <LocationSearchPanel  setPanelOpen ={setPanelOpen}  setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-9'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12'>
      <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed  w-full z-10 bottom-0  px-3 translate-y-full py-8 bg-white pt-12'>
          <LookingForDrivers setVehicleFound={setVehicleFound}/>
      </div>
      
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12'>
<WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home