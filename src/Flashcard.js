import React from 'react';
import { Card } from 'semantic-ui-react';

class Flashcard extends React.Component {
  state = { flipped: false }
  render(){
    debugger
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.front}</Card.Header>
        </Card.Content>
      </Card>
    )
  }
}

export default Flashcard;