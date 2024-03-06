import React from 'react'
import { SortingType } from '../../types/SortingType'

function SortResultsSwitch({
  setSortingType,
}: {
  setSortingType: React.Dispatch<React.SetStateAction<SortingType>>
}) {
  const switchSortingType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingType(e.target?.value as SortingType)
  }

  const SORTING_OPTIONS: { title: string; value: SortingType }[] = [
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
    <div className="results-select">
      <span>Sort results by:</span>
      <select onChange={switchSortingType}>
        {SORTING_OPTIONS.map((option, i) => (
          <option value={option.value} key={i}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortResultsSwitch
