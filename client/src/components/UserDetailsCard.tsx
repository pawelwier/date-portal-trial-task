import React, {useEffect, useState} from 'react'
import {getUserDetails} from "../controllers/UserController";
import {UserDetails} from "../types/UserDetails";

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
    <div>
      <div>
        {userData?.headline}
      </div>
      <div>
        {`Location: ${userData?.location.city}, ${userData?.location.country}, ${userData?.location.distance}km away`}
      </div>
      <div>
        {`Sexual preferences: ${userData?.sexual.anal_position}, ${userData?.sexual.sm}, ${userData?.sexual.safer_sex}`}
      </div>
      <div>
        {`Personal info: age: ${userData?.personal.age}, height: ${userData?.personal.height.cm}, relationship: ${userData?.personal.relationship}`}
      </div>
    </div>
  )
}

export default UserDetailsCard
