import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class FlashcardForm extends React.Component {
  state = {front: "", back: ""}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({front: "", back: ""})
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value, });
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label = 'Front of Card: '
          placeholder = "Word"
          name="front"
          value = {this.state.front}
          onChange = {this.handleChange}>
          </Form.Input>

          <Form.Input
            fluid
            label = 'Back of Card: '
            placeholder = "Definition"
            name="back"
            value = {this.state.back}
            onChange = { this.handleChange }>
          </Form.Input>

          <Form.Button basic color ='green'> Add </Form.Button>
        </Form.Group>
      </Form>
     
    )
  }
}

export default FlashcardForm;