import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import './navbar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="main-nav">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/projects">Projetos</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/articles">Artigos</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/about">Sobre</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  };
};