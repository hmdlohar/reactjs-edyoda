import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        counter: 1
    }

    onIncrementClick = () => {
        this.setState({ counter: this.state.counter + 2 }, () => {
            console.log(this.state.counter, "in callback");
        }); // Added this operation in queue
        console.log(this.state.counter, "counter value");
    }
    // After execution of onIncrementClick() completes. 
    // React will process queue
    // this.state.counter = newValue. 
    // this.render()
    // after render() completes we can say setState() is completed

    render() {
        console.log("re-render")
        return (
            <div>
                Count: {this.state.counter}
                <br></br>
                <button onClick={this.onIncrementClick} >Increment</button>
            </div>
        )
    }
}

// React Converts Data into DOM
// Async