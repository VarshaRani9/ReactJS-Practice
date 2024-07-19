import { useState } from "react"
import ReactmemoHeader from "./ReactmemoHeader"

const ReactMemo = () =>{
    const [title, setTitle] = useState("I am Varsha")
    function changeTitle(){
        setTitle(`I am ${Math.random()}`)
    }
    return (
         <div>
            {/* <> */}
            <button onClick={changeTitle}>Click to change title</button>
            <ReactmemoHeader title={title}/>
            <ReactmemoHeader title="Hello"/>
            <ReactmemoHeader title="Hii"/>
            <ReactmemoHeader title="Bye"/>
            {/* </> */}
         </div>
    )
}
export default ReactMemo