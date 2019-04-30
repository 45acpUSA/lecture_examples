import React, { Component } from 'react';


class Counter extends Component {
    constructor(props){
    super(props)
      this.state = {
        count: 0,
        clicked: "hello"
    }
}



addOne = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount })
}

subOne = () => {
    let newCount = this.state.count - 1
    if(newCount < 1){
        newCount = 0
    }
    this.setState({count: newCount })
}

reset = () => {
    let { count } = this.state
    count = 0
    this.setState({count: count})

}

//ternary example
clickButton = () => {
    let { clicked } = this.state
    let newClicked = clicked === "hello" ? "bye" : "hello"
    this.setState({clicked: newClicked})
}

    render() {
        let { count, clicked } = this.state

      return (
          <div>
       <h1>I am a counter component</h1>
       <h1> Count: {count} </h1>
       <button onClick = {this.subOne}>Subtract 1</button>
       <button onClick = {this.addOne}>Add 1</button>
       <button onClick = {this.reset}>Reset to O</button>
       <button onClick = {this.clickButton}>ternary</button>
       <h1>clicked: {clicked} </h1>
       </div>
        );
        }
    }

export default Counter;
