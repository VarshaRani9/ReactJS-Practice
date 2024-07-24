import { useEffect } from "react"

const LifeCycle = () => {
    
    useEffect(() => {
        // perform setup or data fetching here
        console.log("Component mounted");
        
        return () => {
            // cleanup code (similar to componentWillUnmount)
            console.log("Component Unmounted");
        }
    }, [])

    // RENDER UI
    return <div>Inside Functional LifeCycle component</div>
}
export default LifeCycle

