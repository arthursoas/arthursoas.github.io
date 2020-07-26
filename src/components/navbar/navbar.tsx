
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

import './navbar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Nav className="main-nav">
        <Nav.Item>
          <Nav.Link>
            <Link to="/"><FontAwesomeIcon icon={faHome}/> Home</Link>
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