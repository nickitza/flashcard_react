import React from 'react';
import { Container, Header, } from "semantic-ui-react"; 
import Flashcards from './Flashcards';
import FlashcardForm from './FlashcardForm'



class App extends React.Component {

  state = {
    flashcards: [
      {id: 1, front: "brolly", back: "umbrella",},
      {id: 2, front: "chuffed", back: "happy",},
      {id: 3, front: "courgette", back: "zucchini",},
      {id: 4, front: "crisps", back: "chips",}
    ]
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashcard = (flashcardData) => {
     let flashcard =  { id: this.getId(), ...flashcardData };
     this.setState({ flashcards: [flashcard, ...this.state.flashcards ]})
  }

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard
    })
    this.setState({flashcards: [...flashcards] })
  }

  render(){
    return (
    <Container style={{ paddingTop: "2em" }}>
      <Header> Flashcards </Header>
      <hr />
      <Flashcards flashcards={ this.state.flashcards} remove={this.removeFlashcard}  />
      <br />
      <FlashcardForm add={ this.addFlashcard }/>
    </Container>
    );
  }
}

export default App;
