import React, { Component } from 'react';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import  MeImage from '../../assets/images/me.png';

type HomeState = { showAlert: boolean };
export default class Home extends Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showAlert: false
    };
  };

  render() {
    return (
      <Container className="mt4">
        { this.state.showAlert &&
          <Alert variant="dark" dismissible onClose={
            () => this.setState({...this.state, showAlert: false})
          }>
            <b>Atenção: </b>Este projeto pode estar incompleto. E provavelmente está.
          </Alert>
        }
        <Row>
          <Col lg="2">
            <img src={MeImage} className="h4 br-pill mr3" alt="Arthur's Profile"/>
          </Col>
          <Col lg className="flex flex-column justify-center">
            <h1 className="fw2">Arthur Soares</h1>
            <p className="mb0"><b>Seja bem vindo!</b> Este site é meu projeto pessoal, criado utilizando React!</p>
            <p className="mb2">Aqui você encontrará informações sobre mim e meu trabalho.</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 2, offset: 2 }} className="flex">
            <div className="flex mb1 dark-blue">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr1"/>
              <a href="https://www.linkedin.com/in/arthursoas/" target="blank">LinkedIn</a>
            </div>
          </Col>
          <Col md="2">
            <div className="flex">
              <FontAwesomeIcon icon={faGithubSquare} size="lg" className="mr1"/>
              <a href="https://github.com/arthursoas" target="blank">GitHub</a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};