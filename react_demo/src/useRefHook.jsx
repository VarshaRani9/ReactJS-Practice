import { useEffect, useRef } from "react";

const useRefHook = () => {
    const divRef = useRef();
    useEffect(() => {
        setTimeout(() => {
        divRef.current.innerHTML = "18" 
        }, 5000);
    }, [])

    const incomeTax = 20000;
    return (
         <div> hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div></div>
    )
}
export default useRefHook