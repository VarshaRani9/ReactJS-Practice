/* eslint-disable no-unused-vars */
import { RecoilRoot } from 'recoil'
import './App.css'
import Count from './components/Count'
import Todo from './components/Todo'

function AppRecoil() {

  return (
    <div>
      <RecoilRoot>
        <Count />
        <Todo/>
      </RecoilRoot>
    </div>
  )
}

export default AppRecoil
