import React from 'react'
import backgroundUrl from 'assets/background.png'

const Background = ({ children }) => (
  <div
    className="Background__container"
    style={{ backgroundImage: `url(${backgroundUrl})` }}
  >
    {children}
  </div>
)

export default Background
