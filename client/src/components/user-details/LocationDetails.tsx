import React from 'react'
import {UserLocationDetails} from "../../types/UserLocationDetails";

type LocationDetailsProps = {
  location: UserLocationDetails
}

function LocationDetails({location}: LocationDetailsProps) {
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
