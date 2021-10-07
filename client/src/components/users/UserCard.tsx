import React, {useEffect, useState} from 'react'
import {formatDistance} from 'date-fns'
import {User} from '../../types/User'
import OnlineStatusIcon from './OnlineStatusIcon'
import UserDetailsCard from './UserDetailsCard'
import {useStore} from '../../store/user'

const DEFAULT_PROFILE_IMG_URL = 'https://i.picsum.photos/id/659/200/200.jpg?hmac=kFpdD3XTBGwPUAH1tD-AiWigstjIX8WGIcyySuVQIvE'

function UserCard(user: User) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>('Show more');

  const mode = useStore(state => state.detailDisplayMode)
  const setUserId = useStore(state => state.setSelectedUser)
  const toggleDetailPopup = useStore(state => state.toggleDetailPopup)

  const getTimeDistance = (date: string) => {
    return formatDistance(
      new Date(),
      new Date(date),
    )
  }

  const setSelectedUserId = () => {
    setUserId(user.id)
    toggleDetailPopup()
  }

  const toggleShowMore = () => {
    mode === 'CARD' ? setShowDetails(!showDetails) : setSelectedUserId()
  }

  useEffect(() => {
    setButtonText(showDetails ? 'Show less' : 'Show more')
  }, [showDetails])

  return (
    <div className="user-card">
      <div className="user-name-status">
        {user.name}
        <OnlineStatusIcon status={user.online_status} />
      </div>
      <img className='user-profile-img' src={user.picture?.url || DEFAULT_PROFILE_IMG_URL} alt={user.name} />
      {`Last login: ${getTimeDistance(user.last_login)} ago`}
      <button className="show-details-button btn" onClick={toggleShowMore}>{buttonText}</button>
      {showDetails && <UserDetailsCard id={user.id}/>}
    </div>
  )
}

export default UserCard
