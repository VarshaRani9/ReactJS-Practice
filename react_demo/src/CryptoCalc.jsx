/* eslint-disable react/display-name */
import { memo } from "react"

/* eslint-disable react/prop-types */
const CryptoCalc = memo(({calculateCryptoReturns}) => {
    return <div>
        Crypto returns  : {calculateCryptoReturns}
    </div>
})
export default CryptoCalc