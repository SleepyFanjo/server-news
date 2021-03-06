import React from 'react'

const Header = ({ isMapFocused, setMapFocused }) => {
  return (
    <div
      className={`Header__container ${isMapFocused ? 'hidden' : 'displayed'}`}
    >
      <h1 className="Header--title">Ragnamod V</h1>
      <button
        className="Header--mapDisplay"
        onClick={() => setMapFocused(!isMapFocused)}
      >
        <span className="material-icons">
          {isMapFocused ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
        </span>
      </button>
    </div>
  )
}

export default Header
