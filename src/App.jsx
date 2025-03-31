import { useState } from 'react'

import '../styles/App.css'
import Header from './Header'
import Body from './Body'

function App() {
  return (
    <div className='main-screen'>
      <Header />
      <img className = "effect" src="../src/assets/effect.png" />
      <Body />
    </div>
  )
}

export default App
