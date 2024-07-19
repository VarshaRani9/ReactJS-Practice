/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import CryptoCalc from "./CryptoCalc";

const useCallbackHook = () =>{
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        // Some operation to get the data
        setExchange1Data({
        returns: 100
        });
    }, [])

    useEffect(() => {
        // Some operation to get the data
        setExchange2Data({
        returns: 100
        });
    }, [])

    useEffect(() => {
        // Some operation to get the data
        setTimeout(() => {
        setBankData({
        income: 100
        });
        },5000)
    }, [])

    // const calculateCryptoReturns = function() {
    //     return exchange1Data.returns + exchange2Data.returns;
    // }

    const calculateCryptoReturns = useCallback(function() {
        return exchange1Data.returns + exchange2Data.returns;
    },[exchange1Data, exchange2Data])

    return (
        <div>
            <CryptoCalc calculateCryptoReturns={calculateCryptoReturns}/>
        </div>
    )
}
export default useCallbackHook