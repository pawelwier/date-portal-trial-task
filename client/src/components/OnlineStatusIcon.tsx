import React, {useState} from 'react'
import {OnlineStatus} from "../types/User";

type OnlineStatusIconProps = {
  status: OnlineStatus
}

function OnlineStatusIcon({status}: OnlineStatusIconProps) {
  const getStatusIcon = () => {
    const greenDotUrl = 'https://miro.medium.com/max/512/1*nZ9VwHTLxAfNCuCjYAkajg.png'
    const redDotUrl = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_14/1038581/red-dot-puzzle-before-today-160406.jpg'
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
