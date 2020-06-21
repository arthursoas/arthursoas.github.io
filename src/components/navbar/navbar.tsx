import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

import './navbar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="main-nav">
        <Nav.Item>
          <Nav.Link href="/">Sobre Mim</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projetos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/articles">Artigos</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  };
};