import React from 'react'

const ConfirmRide = () => {
  return (
    <div>
         <h5 className='p-3 text-center w-full absolute top-0 ' onClick={()=>{
        props.setConfirmRidePanel(false)
      }}><i className="text-2xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your journey</h3>
        <div className='flex justify-between flex-col items-center'>
        <img className='h-20' src='/car.png'></img>
        <div className='w-full mt-5'>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
             <i className="text-lg ri-user-location-line"></i>
            <div >
           
                <h3 className='text-lg font-medium'>563/111-A</h3>
                <p className='text-sm -mt-1 text-gray-600 '>Rajat Vihar,NOIDA</p>
            </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="text-lg ri-map-pin-range-line"></i>
            <div >
                <h3 className='text-lg font-medium'>C-62</h3>
                <p className='text-sm -mt-1 text-gray-600 '>JSS,NOIDA</p>
            </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div >
                <h3 className='text-lg font-medium'>180.80</h3>
                <p className='text-sm -mt-1 text-gray-600 '>CASH only</p>
            </div>
            </div>
        </div>
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
        }} className='w-full bg-green-400 text-white font-semibold p-2 rounded-lg mt-5'>
            Confirm
        </button>
        </div>
    </div>
  )
}

export default ConfirmRide