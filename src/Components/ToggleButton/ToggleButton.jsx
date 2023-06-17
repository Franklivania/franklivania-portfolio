import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ( {children, onClick, className} ) => {
  return (
    <button type='button' id='toggle-btn' onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default ToggleButton