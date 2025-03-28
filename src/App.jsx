import { useState } from 'react'

import '../styles/App.css'
import Header from './Header'
import Body from './Body'

function App() {
  return (
    <div className='main-screen'>
      <Header />
      <img className = "effect" src="../assets/effect.png" />
      <Body />
      <img className = "effect2" src="../assets/effect.png" />
    </div>
  )
}

export default App
