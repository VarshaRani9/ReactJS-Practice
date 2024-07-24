import useMousePointer from "../hooks/useMousePointer"

const CutomHook3 = () => {
    const mousePointer = useMousePointer();

    return ( 
        <>
        Your mouse position is {mousePointer.x} {mousePointer.y} 
        </> 
    )    
}
export default CutomHook3
