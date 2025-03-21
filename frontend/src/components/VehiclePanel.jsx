import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5 className='p-3 text-center w-full absolute top-0 ' onClick={()=>{
        props.setVehiclePanelOpen(false)
      }}><i className="text-2xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex mb-2 border-2 border-gray-200 rounded-xl active:border-black w-full p-3 items-center justify-between'
        >
          <img className='h-10' src ="/car.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>Car <span><i className="ri-user-line"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 min ago</h5>
            <p className='font-medium text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>1348.8</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex mb-2 border-2  border-gray-200 rounded-xl active:border-black w-full p-3 items-center justify-between'
        >
          <img className='h-10' src ="/bike.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-line"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 min ago</h5>
            <p className='font-medium text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>1348.8</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} className='flex mb-2 border-2  border-gray-200  rounded-xl active:border-black w-full p-3 items-center justify-between'
        >
          <img className='h-10' src ="/taxi.png"></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-sm'>Taxi <span><i className="ri-user-line"></i></span></h4>
            <h5 className='font-medium text-sm'>2 min ago</h5>
            <p className='font-medium text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>1348.8</h2>
        </div>
        
    </div>
  )
}

export default VehiclePanel