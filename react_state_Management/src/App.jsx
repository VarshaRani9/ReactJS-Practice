/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Count from './components/prop_drilling/Count'
import Buttons from './components/prop_drilling/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* 1. No Prop drilling*/}
      {/* <Count count={count}/>
      <Buttons count={count} setCount={setCount}/> */}

      {/* 2. Prop drilling*/}
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

export default App
