import React, {useEffect, useState} from 'react'
import {formatDistance} from 'date-fns'
import {User} from "../types/User"
import OnlineStatusIcon from "./OnlineStatusIcon"
import UserDetailsCard from "./UserDetailsCard"

function UserCard(user: User) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Show more');

  const getTimeDistance = (date: string) => {
    return formatDistance(
      new Date(),
      new Date(date),
    )
  }

  const toggleShowMore = () => setShowDetails(!showDetails)

  useEffect(() => {
    setButtonText(showDetails ? 'Show less' : 'Show more')
  }, [showDetails])

  return (
    <div className="user-card">
      <img className='user-profile-img' src={user.picture?.url} />
      {user.name}
      {`${getTimeDistance(user.last_login)} ago`}
      <OnlineStatusIcon status={user.online_status} />
      <button onClick={toggleShowMore}>{buttonText}</button>
      {showDetails ? <UserDetailsCard id={user.id}/> : null}
    </div>
  )
}

export default UserCard
