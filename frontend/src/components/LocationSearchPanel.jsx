import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanelOpen,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handelSuggestionClick = (suggestions) => {
    if (activeField === "pickup") {
      setPickup(suggestions);
    } else if (activeField === "destination") {
      setDestination(suggestions);
    }
  };
  return (
    <div className="px-2">
      {
        suggestions.length > 0 ? (
        suggestions.map((elem,idx)=>(
            <div
             key={idx} onClick={()=>handelSuggestionClick(elem)}
             className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
             >
                <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full"> <i className="ri-map-pin-fill"></i></h2>
                <h4 className="font-medium">{elem}</h4>
            </div>
        ))
      ):(
        <p className="text-gray-400 text-sm italic py-4 text-center">No suggestions found</p>
      )
      }
    </div>
  );
};

export default LocationSearchPanel;

//added for type safety

// LocationSearchPanel.propTypes = {
//   suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
//   setVehiclePanel: PropTypes.func,
//   setPanelOpen: PropTypes.func,
//   setPickup: PropTypes.func.isRequired,
//   setDestination: PropTypes.func.isRequired,
//   activeField: PropTypes.oneOf(['pickup', 'destination']).isRequired
// };
