import React from 'react'
import {UserPersonalDetails} from '../../types/UserPersonalDetails'
import {bodyHair, bodyType, isSmoker, userEthnicity, userRelationship} from '../../data/PersonalData'

function LocationDetails(personal: UserPersonalDetails) {
  const {
    age,
    body_hair,
    body_type,
    ethnicity,
    height,
    relationship,
    weight,
    smoker,
  } = personal

  return (
    <>
      <div className="user-details">
        <div className="details-header">
          {'Personal:'}
        </div>
        <div>
          {`age: ${age}, 
          height: ${height.cm}cm, 
          weight: ${weight.kg}kg, 
          body hair: ${bodyHair[body_hair]}, 
          body type: ${bodyType[body_type]}, 
          ethnicity: ${userEthnicity[ethnicity]}
          relationship: ${userRelationship[relationship]}
          smoker: ${isSmoker[smoker]}`}
        </div>
      </div>
    </>
  )
}

export default LocationDetails;
