/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil"
import { todosAtomFamily } from "./atomFamily"

const Todo = ({id}) =>{
    const currentTodo = useRecoilValue(todosAtomFamily(id))
    return (
        <>
            {currentTodo.title} <br/>
            {currentTodo.description}<br/><br/>
        </>
    )
}
export default Todo