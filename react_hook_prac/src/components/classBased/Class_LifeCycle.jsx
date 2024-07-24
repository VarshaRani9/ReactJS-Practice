import React from "react";

class Class_LifeCycle extends React.Component {
    // constructor

    componentDidMount(){
         // perform setup or data fetching here
         console.log("Component mounted");
    }

    componentWillUnmount() {
        // cleanup code (similar to componentWillUnmount)
        console.log("Component Unmounted");
    }

    // RENDER UI
    render() {
        return (
            <div>Class based LifeCycle component</div>
        )
    }
}
export default Class_LifeCycle