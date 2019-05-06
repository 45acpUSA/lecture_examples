import React, { Component } from 'react';

import './App.css'

class Square extends Component{
  handleClick = ()=>{
    const{ index } = this.props
    this.props.handleClick(index)
  }

  render(){
    const { value } = this.props
    return(
      <div>
        <div
          className="mainSquare"
          onClick={ this.handleClick }
        >
          {value}
        </div>
      </div>
    )
  }
}

export default Square
