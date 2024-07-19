import { useState } from "react"
import CommonHeader from "./CommonHeader"

const Rerender = () =>{
    const [title, setTitle] = useState("I am Varsha")
    function changeTitle(){
        setTitle(`I am ${Math.random()}`)
    }
    return (
         <>
            <button onClick={changeTitle}>Click to change title</button>
            <CommonHeader title={title}/>
            <CommonHeader title="Hello"/>
         </>
    )
}
export default Rerender