import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
        "Labour Chowk,Sector 62,NOIDA",
        "C-block Rajat Vihar,Sector 62,NOIDA",
        "A-block Labour Chowk,Sector 62,NOIDA",
        "B-block Labour Chowk,Sector 62,NOIDA"
      ]
  return (

    <div>
        {
            locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 my-4 items-center justify-start'>
                <h2  className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'>
                <i className="ri-map-pin-line text-2xl"></i>
                </h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })
        }
        
        
        
    </div>
  )
}

export default LocationSearchPanel