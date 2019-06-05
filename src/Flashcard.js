import React from 'react';
import { Card, Button } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { flipped: false }

  toggleFlashcard = () => this.setState({ flipped: !this.state.flipped })
  render(){
    // debugger
    return (
      <Card color='blue'>
        <Card.Content>
    {this.state.flipped ? <Card.Description>{this.props.back}</Card.Description> : <Card.Header>{this.props.front}</Card.Header>}
        </Card.Content>
        <Card.Content extra>
          <div className='ui two tiny buttons'>
            <Button basic color='green' 
            onClick={this.toggleFlashcard}>
            {this.state.flipped ? "Flip To Front" : "Flip To Back"}
            </Button>
            <Button basic color='red' onClick={() => this.props.remove(this.props.id) }>
            Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
export default Flashcard;