import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className="b--light-silver bt w-100 tc">
        <p className="mb2 mt2 silver f6">Copyright © 2020 Arthur Soares. Todos os Direitos Reservados</p>
      </Container>
    );
  };
};