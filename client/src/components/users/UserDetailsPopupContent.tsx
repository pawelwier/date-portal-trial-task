import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../../controllers/UserController'
import { UserDetails } from '../../types/UserDetails'
import UserDetailsCard from './UserDetailsCard'

function UserDetailsPopupContent({
  id,
  userName,
  userImg,
}: {
  id: number
  userName: string
  userImg: string
}) {
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
      {userData && (
        <div>
          <h2 className="user-popup-name">{userName}</h2>
          <div className="user-popup-img-wrapper">
            <img className="user-popup-img" alt="user img" src={userImg} />
          </div>
          <UserDetailsCard id={userData.id} />
        </div>
      )}
    </div>
  )
}

export default UserDetailsPopupContent
