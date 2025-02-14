import React from 'react'
import { UserSexualDetails } from '../../types/UserSexualDetails'
import { analPosition, isSm, saferSex } from '../../data/SexualData'

function LocationDetails(sexual: UserSexualDetails) {
  const { anal_position, safer_sex, sm } = sexual

  return (
    <>
      <div className="user-details">
        <div className="details-header">{'Sexual:'}</div>
        <div>
          {`anal position: ${analPosition[anal_position]}, 
          safer sex: ${saferSex[safer_sex]}, 
          S&M: ${isSm[sm]}`}
        </div>
      </div>
    </>
  )
}

export default LocationDetails
