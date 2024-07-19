import { useState } from "react"
import { CountContext } from "./store/context"
import Count from "./components/Count"

const AppContext = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
        <CountContext.Provider value={{count, setCount}}>
            <Count/>
        </CountContext.Provider>
    </div>
  )
}
export default AppContext