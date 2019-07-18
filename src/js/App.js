import React from 'react'
import Background from './components/Background'
import Header from './components/Header'
import StatusCard from './components/StatusCard'

const App = () => {
  return (
    <Background>
      <Header />
      <StatusCard />
    </Background>
  )
}

export default App
