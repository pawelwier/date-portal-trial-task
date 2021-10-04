import React, {useEffect, useState} from 'react'
import {getUserDetails} from '../controllers/UserController'
import {UserDetails} from '../types/UserDetails'
import LocationDetails from "./user-details/LocationDetails";
import PersonalDetails from "./user-details/PersonalDetails";
import SexualDetails from "./user-details/SexualDetails";

type UserDetailsProps = {
  id: number
}

function UserDetailsCard({id}: UserDetailsProps) {
  const [userData, setUserData] = useState<UserDetails | null>(null)

  useEffect(() => {
    const getDetails = async () => {
      const detailsResponse = await getUserDetails(id)
      setUserData(detailsResponse[0])
    }
    getDetails()
  }, [id])

  return (
    userData ?
      <div className="user-details-container">
        <div className="details-header">
          {userData.headline}
        </div>
        <LocationDetails location={userData.location} />
        <PersonalDetails personal={userData.personal} />
        <SexualDetails sexual={userData.sexual} />
      </div>
      : null
  )
}

export default UserDetailsCard
