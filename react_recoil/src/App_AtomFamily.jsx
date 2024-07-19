import { RecoilRoot } from 'recoil'
import Todo from './Todo'
const App_AtomFamily = () =>{
    return <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={2}/>
    </RecoilRoot>
}
export default App_AtomFamily