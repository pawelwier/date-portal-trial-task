import React from 'react'
import {useStore} from '../../store/user'
import {DetailDisplayMode} from '../../types/UserStoreState'

function DetailDisplayModeSwitch() {
  const mode = useStore(state => state.detailDisplayMode)
  const setMode = useStore(state => state.setDetailDisplayMode)

  const selectMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value as DetailDisplayMode)
  }

  const DISPLAY_DETAIL_OPTIONS: {id: DetailDisplayMode, label: string}[] = [
    {
      id: 'CARD',
      label: 'Below each card',
    },
    {
      id: 'POPUP',
      label: 'Show popup',
    },
  ]

  return (
    <div className="display-switch-container">
      <div>Detail display:</div>
      <div>
        {DISPLAY_DETAIL_OPTIONS.map((option, i) => (
          <span key={i}>
            <input type="radio" id={option.id} name="displayModeSelect" value={option.id} checked={option.id === mode} onChange={selectMode} />
            <label className="mode-detail-label" htmlFor={option.id}>{option.label}</label>
          </span>
        ))}
      </div>
    </div>
  )
}

export default DetailDisplayModeSwitch
