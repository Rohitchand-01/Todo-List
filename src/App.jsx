import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainbox from './Components/MainBox/Mainbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainbox/>
    </>
  )
}

export default App
