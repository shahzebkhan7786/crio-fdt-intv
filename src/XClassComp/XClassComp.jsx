import React, { Component } from 'react';

class XClassComp extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }

    handleInc = ()=>{
        this.setState(prev=> ({
            count: prev.count + 1
        }))
    }

    handleDec = ()=>{
        this.setState(prev=> ({
            count: prev.count - 1
        }))
    }
    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleInc}>Increment</button>
                <button onClick={this.handleDec}>Decrement</button>
            </div>
        );
    }
}

export default XClassComp;