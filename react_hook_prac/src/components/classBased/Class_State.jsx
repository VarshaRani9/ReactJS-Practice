import React from "react";

class Class_State extends React.Component{
    constructor(props){
        super(props)
        this.state = {count: 0};
    }

    // ? NOT WORKING
    // incrementCount () {
    //     this.setState({count: this.state.count+1})
    // }
    
    // ? WORKING
    incrementCount = () => {
        this.setState({count: this.state.count+1})
    }
    render() {
        return ( 
        <div>
            <p>{this.state.count}</p>
            <button onClick={this.incrementCount}>Increase Count</button>
            <br />
        </div>
        )
    }
}
export default Class_State