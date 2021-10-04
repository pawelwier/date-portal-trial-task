import React from 'react'
import {OnlineStatus} from '../types/User';

type OnlineStatusIconProps = {
  status: OnlineStatus
}

function OnlineStatusIcon({status}: OnlineStatusIconProps) {
  const getStatusIcon = () => {
    const greenDotUrl = 'https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png'
    const redDotUrl = 'https://pngpress.com/wp-content/uploads/2020/08/uploads_dot_dot_PNG44.png'
    const fireIconUrl = 'https://cdn-icons-png.flaticon.com/512/740/740842.png'
    return status === 'ONLINE' ? greenDotUrl : status === 'OFFLINE' ? redDotUrl : fireIconUrl
  }

  return (
    <div>
      <img className='online-status-icon' src={getStatusIcon()} alt="" />
    </div>
  )
}

export default OnlineStatusIcon
