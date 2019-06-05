import React from 'react';
import { Container, Header, Icon} from "semantic-ui-react"; 
import Flashcards from './Flashcards';
import FlashcardForm from './FlashcardForm'



class App extends React.Component {

  state = {
    flashcards: [
      {id: 1, front: "REST", back: "Representational State Transfer. A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.",},
      {id: 2, front: "API", back: "Application Programming Interface. In computer programming, an application programming interface is a set of subroutine definitions, communication protocols, and tools for building software.",},
      {id: 3, front: "DOM", back: "Document Object Model",},
      {id: 4, front: "HTML", back: "Hypertext Markup Language",}
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
      <Header as='h2' icon>
        <Icon name='blue react' />
        Flashcards
      <Header.Subheader>with React</Header.Subheader>
  </Header>
      <hr />
      <Flashcards flashcards={ this.state.flashcards} remove={this.removeFlashcard}  />
      <br />
      <FlashcardForm add={ this.addFlashcard }/>
    </Container>
    );
  }
}

export default App;
