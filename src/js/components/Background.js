import React from 'react'

const Background = ({ children }) => (
  <div className="Background__container">
    <iframe
      title="Minelive"
      src="https://game-fr-10.mtxserv.com/mapviewer/serveur16/#/111/64/184/-3/world%20-%20overworld/Normal"
    />
    {children}
  </div>
)

export default Background
