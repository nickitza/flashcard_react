import React from 'react';
import { Card, Button } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { flipped: false }

  render(){
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.front}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two tiny buttons'>
            <Button basic color='green'>
            Flip Card
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