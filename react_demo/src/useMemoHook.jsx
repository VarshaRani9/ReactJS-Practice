import { useEffect, useMemo, useState } from 'react'

function useMemoHook(){

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

    // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

    // The line 33 will render even if there is no change in exchange1Data or exchange2Data so wht to perform this calculation again, therefore we will use useMemo
    
    const cryptoReturns = useMemo(() => {
        return exchange1Data.returns + exchange2Data.returns;
    }, [exchange1Data, exchange2Data])

    const incomeTax = (cryptoReturns + bankData.income) * 0.

    return (
        <div>hi there, your income tax returns are {incomeTax}</div>
    )
}

export default useMemoHook