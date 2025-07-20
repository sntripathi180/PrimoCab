const axios = require("axios");
const captainModel = require("../models/captain.model");

module.exports.getAddressCoordinates = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "PrimoCab" } 
    });

    if (response.data.length > 0) {
      const location = response.data[0];
      return {
        ltd: parseFloat(location.lat),
        lng: parseFloat(location.lon),
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const ORS_API_KEY = process.env.OPENROUTESERVICE_API;

module.exports.getDistanceTime = async (origin, destination) => {
  const [originCoords, destinationCoords] = await Promise.all([
    module.exports.getAddressCoordinates(origin),
    module.exports.getAddressCoordinates(destination),
  ]);

  const url = `https://api.openrouteservice.org/v2/matrix/driving-car`;

  try {
    const response = await axios.post(
      url,
      {
        locations: [
          [originCoords.lng, originCoords.ltd],
          [destinationCoords.lng, destinationCoords.ltd],
        ],
        metrics: ["distance", "duration"],
      },
      {
        headers: {
          Authorization: ORS_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const { distances, durations } = response.data;
    return {
      distance: distances[0][1], // in meters
      duration: durations[0][1], // in seconds
    };
  } catch (err) {
    console.error(err);
    throw new Error("Unable to fetch distance and time");
  }
};


module.exports.getAutoCompleteSuggestions = async (input) => {
  const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}`;

  try {
    const response = await axios.get(url);
    const suggestions = response.data.features.map((f) => f.properties.name);
    return suggestions;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to fetch suggestions");
  }
};
const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};
module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km


    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;


}