import React from 'react'
import {SortingType} from '../../types/SortingType'
import DetailDisplayModeSwitch from './DetailDisplayModeSwitch'
import SortResultsSwitch from './SortResultsSwitch'

function Header({setSortingType}: {setSortingType: React.Dispatch<React.SetStateAction<SortingType>>}) {

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="header-container">
      <div className="header-logo" onClick={refreshPage}>
        PLANET ROMEO
      </div>
      <SortResultsSwitch setSortingType={setSortingType} />
      <DetailDisplayModeSwitch />
    </div>
  )
}

export default Header;
