import { useState } from 'react'
import './App.css'
import Ticker from './components/Ticker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ticker />
    </>
  )
}

export default App
