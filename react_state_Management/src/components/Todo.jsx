/* eslint-disable no-unused-vars */
import { useState } from "react"

const Todo = () => {
    const [title, setTitle] = useState("")
    return(
        <div>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="description"/>
            <button>Add Todo</button>
        </div>
    )
}
export default Todo