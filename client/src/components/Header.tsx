import React from 'react'
import {SortingType} from "../types/SortingType";

type HeaderProps = {
  setSortingType: any
}

function Header({setSortingType}: HeaderProps) {
  const switchSortingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target?.value)
  }

  const SORTING_OPTIONS = [
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
    <div>
      Header
      <select onChange={switchSortingType}>
        {SORTING_OPTIONS.map((option, i) => (
          <option value={option.value} key={i}>{option.title}</option>
          ))}
      </select>
    </div>
  )
}

export default Header;
