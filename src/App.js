import React from 'react';
import { Container, Header, Icon} from "semantic-ui-react"; 
import { Route, Switch, } from "react-router-dom";
import About from './About';
import FlashcardApp from './FlashcardApp';
import Home from './Home';
import Navbar from './Navbar';
import NoMatch from './NoMatch';



const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/flashcardapp" component={FlashcardApp} />
      <Route  component={NoMatch} />
    </Switch>

  </>

    );
  
export default App;
