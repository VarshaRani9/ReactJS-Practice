
/* eslint-disable no-unused-vars */
import './App.css'
import State from './components/functional/State'
import Class_State from './components/classBased/Class_State'
import LifeCycle from './components/functional/LifeCycle'
import Class_LifeCycle from './components/classBased/Class_LifeCycle'
import { useEffect, useState } from 'react'
import CustomHooks from './components/CustomHooks'
import CustomHooks2 from './components/CustomHook2'
import CutomHook3 from './components/CutomHook3'
import CustomHook4 from './components/CustomHook4'
import CustomHook5 from './components/CustomHook5'

function App() {
  const [render, setRender] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    }, 10000)
  },[])

  return (
    <>
      {/* <State/> */}
      {/* <Class_State /> */}
      {/* {render? <LifeCycle/> : <div>rendered after unmounting LifeCycle component</div> } */}
      {/* {render? <Class_LifeCycle/> : <div></div> } */}
      {/* <CustomHooks/> */}
      {/* <CustomHooks2/> */}
      {/* <CutomHook3/> */}
      {/* <CustomHook4/> */}
      <CustomHook5/>
    </>
  )
}
export default App
