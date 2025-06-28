import React, { useContext } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainDetails = () => {
  const {captain }= useContext(CaptainDataContext)
  return (
    <div>
         <div className="flex
         items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="./driver.jpg" alt="driver" />
            <h4 className="text-lg font-medium">{captain.fullname.firstname + " " + captain.fullname.lastname} </h4>
          </div>
          <div >
            <h4 className="text-xl font-semibold">₹234</h4>
            <p className="text-sm">Earned</p>
          </div>
        </div>
        <div className="flex p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <img className="text-2xl font-thin h-6 pl-5" src="./clock.png" alt="Hours online" />
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-500">Hours online</p>
          </div>
          <div className="text-center">
            <img className="text-2xl font-thin h-6 pl-5" src="./speedometer.png" alt="Hours online" />
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-500">Hours online</p>
          </div>
          <div className="text-center">
             <img className="text-2xl font-thin h-6 pl-5" src="./write.png" alt="Hours online" />
            <h5 className="text-lg font-medium">10.3</h5>
            <p className="text-sm text-gray-500">Hours online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails