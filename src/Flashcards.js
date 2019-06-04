import React from 'react'
import {Button, Card} from 'semantic-ui-react'
import Flashcard from 'Flashcard.js';

const Flashcards = ( {flashcards} ) => (
  <Card.Group>
    {
      flashcards.map( flashcard => (
        <Flashcard
        key={flashcard.id} {...flashcard} />
      ))
    }
  </Card.Group>
)

export default Flashcards;