import React, { Component } from 'react';

class GreetingComp extends Component {

  render(){
    let { name } = this.props
    console.log('props in the greeting component', this.props)
    return(
      <h1>Hello, {name} !</h1>
    )
  }
}

export default GreetingComp