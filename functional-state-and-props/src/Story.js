import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Story extends Component {
  render() {
    const{ name, movie} = this.props
    return(
      <Card>
        <Card.Body>
          {name} has a favorite movie.  It is {movie} and the best place to watch it is the Drive In.
        </Card.Body>
      </Card>

    )
  }
}

export default Story
