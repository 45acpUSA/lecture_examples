import React, { Component } from 'react';
import GreetingComp from './GreetingComp'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      names: [
        "Bob Belcher",
        "Linda Belcher",
        "Gene Belcher"
      ]
    }
  }

  render(){
    let greetings = this.state.names.map((name) => {
      return <GreetingComp name={name} />
    })
    return (
      <div>
        {greetings}
      </div>
    )
  }
}

export default App