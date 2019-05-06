import React, { Component } from 'react';
import Square from './Square'


//setting an intial state as an array of 9 items
class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      spaces: [],
      gameStatus: 'unstarted',
      bombIndex: 0,
      treasureIndex: 1,
    }
  }

  startGame = () => {
    const{ spaces } = this.state
    const bombIndex = this.getOpenBoardNumber(9)
    const treasureIndex = this.getOpenBoardNumber(9, [bombIndex])
    this.setState({
      spaces: [
        '?', '?', '?',
        '?', '?', '?',
        '?', '?', '?'
      ],
      bombIndex: bombIndex,
      treasureIndex: treasureIndex,
      gameStatus: 'inProgress',
    })
  }

  getOpenBoardNumber = (max, blackList=[])=>{
    var newNumber
    do{
      newNumber = Math.floor(Math.random() * max)
    }while(blackList.indexOf(newNumber) >= 0)
    return newNumber
  }

  handleClick = (spacesIndex)=>{
    let{ gameStatus } = this.state
    const{
      bombIndex,
      spaces,
      treasureIndex
    } = this.state

    if(gameStatus != 'inProgress'){ return }

    if(spacesIndex === bombIndex){
      spaces[spacesIndex] = 'Boom'
      gameStatus = 'lost'
    }else if(spacesIndex === treasureIndex){
      spaces[spacesIndex] = 'Coin'
      gameStatus = 'won'
    } else {
      spaces[spacesIndex] = 'T'
    }


    this.setState({ gameStatus, spaces })
  }

//mapping over the spaces array and assigning a Square component to each index
//Passing <Square /> the value and index of the array as props
  render(){
    let { spaces, gameStatus } = this.state;
    let square = spaces.map((value, index) => {
      return(
        <Square
          key={index}
          index={index}
          value={value}
          handleClick={this.handleClick}
        />
      )
    })
//passing the variable square that holds logic from the map function to display
    return(
      <div>
        <h1>Welcome to TreasureHunt</h1>
        {gameStatus != 'inProgress' &&
          <button
            onClick={this.startGame}
          >
            Start Game
          </button>
        }

        {gameStatus === 'won' &&
          <h2>You Won</h2>
        }

        {gameStatus === 'lost' &&
          <h2>You Lost</h2>
        }
        <div id="mainBoard">{square}</div>
      </div>
    )
  }
}

export default Board
