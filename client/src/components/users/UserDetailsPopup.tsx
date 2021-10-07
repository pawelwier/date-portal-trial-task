import React, {useEffect, useState} from 'react'
import {getUserDetails} from '../../controllers/UserController'
import {UserDetails} from "../../types/UserDetails";

function UserDetailsPopup({id}: {id: number}) {
  const [userData, setUserData] = useState<UserDetails | null>(null)

  useEffect(() => {
    const getDetails = async () => {
      const detailsResponse = await getUserDetails(id)
      setUserData(detailsResponse[0])
    }
    getDetails()
  }, [id])

  // TODO: display selected user inside a popup

  return (
    <div>
      {userData?.id}
    </div>
  )

}

export default UserDetailsPopup
