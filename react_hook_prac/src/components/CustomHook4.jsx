import { useState } from "react"
import useInterval from "../hooks/useInterval"

const CustomHook4 = () => {
    const [count, setCount] = useState(0)
    useInterval(()=>{
        setCount(c => c+1)
    },1000)

    return (
        <>
            Timer is at {count}
        </>
    )
}
export default CustomHook4
