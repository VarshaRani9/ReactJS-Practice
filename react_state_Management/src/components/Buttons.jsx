/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRecoilState, useSetRecoilState } from "recoil"
import { countAtom } from "../store/atom/count"

const Buttons = () => {
    // const [count,setCount] = useRecoilState(countAtom)
    const setCount = useSetRecoilState(countAtom)
    return (
        <div>
            {/* <button onClick={() => {setCount(count+1)}}>Increase Count</button>
            <button onClick={() => {setCount(count-1)}}>Decrease Count</button> */}

            <button onClick={() => {setCount(c => c+1)}}>Increase Count</button>
            <button onClick={() => {setCount(c => c-1)}}>Decrease Count</button>
        </div>
    )
}
export default Buttons