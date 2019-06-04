import React from 'react';
import { Container, Header, } from "semantic-ui-react"; 
import Flashcards from './Flashcards';
class App extends React.Component {

  state = {
    flashcards: [
      {id: 1, front: "brolly", back: "umbrella",},
      {id: 2, front: "chuffed", back: "happy",},
      {id: 3, front: "courgette", back: "zucchini",},
      {id: 4, front: "crisps", back: "chips",}
    ]
  }

  render(){
    return (
    <Container style={{ paddingTop: "2em" }}>
      <Header> Flashcards </Header>
      <Flashcards flashcards={this.state.flashcards} />
    </Container>
    );
  }
}

export default App;
