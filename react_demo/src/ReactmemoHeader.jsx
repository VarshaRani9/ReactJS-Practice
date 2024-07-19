/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import {memo} from "react"

const ReactmemoHeader = memo(({title}) => {
    return (
         <div>
            <h4>{title}</h4>
         </div>
    )
})
export default ReactmemoHeader