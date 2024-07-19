import { useNavigate } from "react-router-dom";

const Appbar = () => {
    const navigate = useNavigate();
    return <>
        {/* Below is topbar which will remain at the top in each route*/}
        {/* <div style={{background:"black", color:"white"}}>
        This is topbar
        </div> */}

        {/* 1. Page is reloading on each click - as we are using location of window object */}
        {/* <div>
        <button onClick={() => {window.location.href="/"}}>Landing Page</button>
        <button onClick={() => {window.location.href="/dashboard"}}>Dashboard</button>
        </div> */}

        {/*	2. Using useNavigate – It will not do hard reload of the page i.e will do client side routing(CSR) */}
        {/* useNavigate Hook expects to be hooked only inside components which are inside the BrowserRouter */}
        <div>
        <button onClick={() => {navigate("/")}}>Landing Page</button>
        <button onClick={() => {navigate("/dashboard")}}>Dashboard</button>
        </div>
    </>
}
export default Appbar