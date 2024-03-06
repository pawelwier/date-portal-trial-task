import React, { ReactNode } from 'react'

type PopupProps = {
  headerText: string
  cancelText?: string
  submitText?: string
  children: ReactNode
  onCancel: () => void
  onSubmit: () => void
}

function Popup({
  headerText,
  cancelText = 'Cancel',
  submitText = 'Submit',
  children,
  onCancel,
  onSubmit,
}: PopupProps) {
  return (
    <>
      <div className="popup-background" />
      <div className="popup-main">
        <div className="popup-element popup-header">{headerText}</div>
        <div className="popup-content">{children}</div>
        <div className="popup-element popup-footer">
          <button onClick={onCancel} className="secondary-button btn">
            {cancelText}
          </button>
          <button onClick={onSubmit} className="main-button btn">
            {submitText}
          </button>
        </div>
      </div>
    </>
  )
}

export default Popup
