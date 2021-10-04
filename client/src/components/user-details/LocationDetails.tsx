import React from 'react'
import {UserLocationDetails} from "../../types/UserLocationDetails";

function LocationDetails(location: UserLocationDetails) {
  const {
    city,
    country,
    distance
  } = location

  return (
    <>
      <div className="user-details">
        <div className="details-header">
          {'Location:'}
        </div>
        <div>
          {`${city}, ${country}, ${distance}km away`}
        </div>
      </div>
    </>
  )
}

export default LocationDetails;
