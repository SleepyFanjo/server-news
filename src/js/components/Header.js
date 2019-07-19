import React from 'react'

const Header = ({ isMapFocused, setMapFocused }) => {
  return (
    <div
      className={`Header__container ${isMapFocused ? 'hidden' : 'displayed'}`}
    >
      <h1 className="Header--title">Server News</h1>
      <button
        className="Header--mapDisplay"
        onClick={() => setMapFocused(!isMapFocused)}
      >
        <span className="material-icons">
          {isMapFocused ? 'keyboard_arrow_down' : 'map'}
        </span>
      </button>
    </div>
  )
}

export default Header
