import React from 'react'
import {SortingType} from "../types/SortingType";

type HeaderProps = {
  setSortingType: React.Dispatch<React.SetStateAction<SortingType>>
}

function Header({setSortingType}: HeaderProps) {
  const switchSortingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target?.value as SortingType)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const SORTING_OPTIONS: {title: string, value: SortingType}[] = [
    {
      title: 'Activity',
      value: 'ACTIVITY',
    },
    {
      title: 'Distance',
      value: 'DISTANCE',
    },
  ]

  return (
    <div className="header-container">
      <div className="header-logo" onClick={refreshPage}>
        PLANET ROMEO
      </div>
      <div className="results-select">
        <span>
          Sort results by:
        </span>
        <select onChange={switchSortingType}>
          {SORTING_OPTIONS.map((option, i) => (
            <option value={option.value} key={i}>{option.title}</option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default Header;
