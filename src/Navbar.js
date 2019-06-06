import React from "react";
import { Link } from "react-router-dom";
import {Container, Header, Icon, Menu} from 'semantic-ui-react';

const Navbar = () => (
  <Menu style={{ paddingTop: "2em" }}>
    <Header as="h2" icon style={{ marginLeft: "1em" }}>
      <Icon  name="blue react" />
      Flashcards
      <Header.Subheader>with React</Header.Subheader>
    </Header>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/flashcardapp">
      <Menu.Item>
        Flashcards
      </Menu.Item>
    </Link>
    <hr />
  </Menu>
);

export default Navbar;