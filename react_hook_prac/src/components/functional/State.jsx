import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () =>{
        setCount(c => c+1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Increase Count</button>
        </div>
    )
}
export default State
