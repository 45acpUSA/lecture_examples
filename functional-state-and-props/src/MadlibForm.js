import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class MadlibForm extends Component {
  render() {
    const{ nameChange, movieChange} = this.props
    return(
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={nameChange}
          />
          <Form.Text>
            What would you name your dinosour?
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="formBasicMovie">
          <Form.Label>Movie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Name"
            onChange={movieChange}
          />
          <Form.Text>
            Favorite movie from the 90's?
          </Form.Text>
        </Form.Group>
      </Form>
    )
  }
}

export default MadlibForm
