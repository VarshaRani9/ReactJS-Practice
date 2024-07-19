/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Counter.jsx'
import './index.css'
import ComponentReturn from './ComponentReturn.jsx'
import Rerender from './Rerender.jsx'
import PushingStateDown from './PushingStateDown.jsx'
import Keys from './Keys.jsx'
import ReactMemo from './REactMemo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <ComponentReturn/> */}
    {/* <Rerender/> */}
    {/* <PushingStateDown/> */}
    <ReactMemo/>
    {/* <Keys/> */}
  </React.StrictMode>,
)
