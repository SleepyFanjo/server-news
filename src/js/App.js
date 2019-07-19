import React, { useState } from 'react'
import Background from './components/Background'
import Header from './components/Header'
import StatusCard from './components/StatusCard'

const App = () => {
  const [isMapFocused, setMapFocused] = useState(false)
  return (
    <Background>
      <Header isMapFocused={isMapFocused} setMapFocused={setMapFocused} />
      <StatusCard display={!isMapFocused} />
    </Background>
  )
}

export default App
