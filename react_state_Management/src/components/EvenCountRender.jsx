/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil"
import { countAtom } from "../store/atom/count"
import { useMemo } from "react"
import { EvenSelector } from "../store/Selector"

const EvenCountRender = () =>{
    const count = useRecoilValue(countAtom)
    // const isEven = count%2==0;
    // const isEven = useMemo(()=>{
    //     return count%2==0;
    // }, [count])

    const isEven = useRecoilValue(EvenSelector)
    return (
        <div>
            {(isEven) ? "It is Even" : null}
        </div>
    )
}
export default EvenCountRender