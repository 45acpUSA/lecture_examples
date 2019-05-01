import React from 'react';
import Story from './Story'
import MadlibForm from './MadlibForm'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: 'Bob',
      movie: 'Zoolander'
    }
  }

  onNameChange = (event) => {
    console.log(event)
    this.setState({ name: event.target.value })
  }

  onMovieChange = (e) => {
    this.setState({ movie: e.target.value })
  }

  render(){
    const{ name, movie } = this.state
    return (
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <MadlibForm
            nameChange={this.onNameChange}
            movieChange={this.onMovieChange}
          />
          <Story
            name={name}
            movie={movie}
          />

        </div>
      </div>
    );
  }
}

export default App;
