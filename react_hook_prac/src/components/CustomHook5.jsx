import { useState } from "react"
import useDebounce from "../hooks/useDebounce"

const CustomHook5 = () => {
    const [inputValue, setInputValue] = useState('')
    const debounceValue = useDebounce(inputValue, 500)

    return (
        <>
        {console.log(debounceValue)}
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search.."/>
        </>
    )
}
export default CustomHook5
