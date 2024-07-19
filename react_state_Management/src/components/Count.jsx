/* eslint-disable react/prop-types */
import { useRecoilValue } from "recoil"
import Buttons from "./Buttons"
import { countAtom } from "../store/atom/count"
import EvenCountRender from "./EvenCountRender"

const Count = () => {
    const count = useRecoilValue(countAtom)
    return (
        <div>
            <h4>count: {count}</h4>
            <EvenCountRender/>
            <Buttons/>
        </div>
    )
}
export default Count