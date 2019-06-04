import React from 'react'
import { Card } from 'semantic-ui-react'
import Flashcard from './Flashcard.js';

const Flashcards = ( {flashcards, remove} ) => (
  <Card.Group>
    {
      flashcards.map( flashcard => (
        <Flashcard key={flashcard.id} {...flashcard} remove={remove} />
      ))
    }
  </Card.Group>
)

export default Flashcards;