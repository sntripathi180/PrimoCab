import React from 'react'
import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {

  const location = useLocation()
  const {ride } = location.state || {}
  const {socket} = useContext(SocketContext)
  const navigate = useNavigate()

  socket.on("ride-ended",()=>{
    navigate('/home')

  })

  return (
    <div className='h-screen' >
        <Link to='/home' className='fixed right-2 top-2 h-8 w-8 bg-white flex items-center justify-center rounded-full border-2 border-gray-400'>
            <img 
            className='text-sm font-medium '
            src="/home.png" alt="home" />
        </Link>
        <div className='h-1/2'>
           <LiveTracking/>
        </div>
        <div className='h-1/2 p-4'>
          <div className='flex items-center justify-between'>
        <img 
        className='h-15' 
        src="./car.png" alt="" />
        <div className='text-right pr-1'>
          <h2 className='text-lg font-medium '>{ride?.captain.fullname.firstname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600 '> Maruti Suzuki</p>
        </div>
       </div>
        <div className='flex gap-2 justify-between flex-col items-center'>
       
        <div className='w-full mt-5'>
       
            <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="text-lg ri-map-pin-range-line"></i>
            <div >
                <h3 className='text-lg font-medium'>Destination</h3>
                <p className='text-sm -mt-1 text-gray-600 '>{ride?.destination}</p>
            </div>
            </div>
            <div className='flex items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div >
                <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                <p className='text-sm -mt-1 text-gray-600 '>CASH only</p>
            </div>
            </div>
        </div>
        
        </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
        </div>
    </div>
  )
}

export default Riding