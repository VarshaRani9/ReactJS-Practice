import React, { Suspense } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
const Dashboard = React.lazy(() => import("./components/Dashboard"));
import { Landing } from './components/Landing'
import Appbar from './components/Appbar'

function App() {

  return (
    <BrowserRouter>
    <Appbar/>
      <Routes>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/> 
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
