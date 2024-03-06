import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../../controllers/UserController'
import { UserDetails } from '../../types/UserDetails'
import LocationDetails from '../user-details/LocationDetails'
import PersonalDetails from '../user-details/PersonalDetails'
import SexualDetails from '../user-details/SexualDetails'

function UserDetailsCard({ id }: { id: number }) {
  const [userData, setUserData] = useState<UserDetails | null>(null)

  useEffect(() => {
    const getDetails = async () => {
      const detailsResponse = await getUserDetails(id)
      setUserData(detailsResponse[0])
    }
    getDetails()
  }, [id])

  return userData ? (
    <div className="user-details-container">
      <div className="details-header">{userData.headline}</div>
      <LocationDetails {...userData.location} />
      <PersonalDetails {...userData.personal} />
      <SexualDetails {...userData.sexual} />
    </div>
  ) : null
}

export default UserDetailsCard
