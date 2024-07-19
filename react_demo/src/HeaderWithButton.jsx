import { useState } from "react"

const HeaderWithButton = () =>{
    const [title, setTitle] = useState("I am Varsha")
    function changeTitle(){
        setTitle(`I am ${Math.random()}`)
    }
    return (
         <>
            <button onClick={changeTitle}>Click to change title</button>
            <h4>{title}</h4>
         </>
    )
}
export default HeaderWithButton