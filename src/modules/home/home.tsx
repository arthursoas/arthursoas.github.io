import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faFileDownload } from "@fortawesome/free-solid-svg-icons";

import MeImage from '../../assets/images/me.png';

type HomeState = { showAlert: boolean };
export default class Home extends Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      showAlert: true
    };
  };

  render() {
    return (
      <Container className="mt4">
        { this.state.showAlert &&
          <Alert variant="dark" dismissible onClose={
            () => this.setState({...this.state, showAlert: false})
          }>
            <b>Atenção: </b>Este projeto está desenvolvimento. Bugs podem ser encontrados.
          </Alert>
        }
        <Row>
          <Col lg="2">
            <img src={MeImage} className="h4 br-pill mr3" alt="Arthur's Profile"/>
          </Col>
          <Col lg className="flex flex-column">
            <h1 className="fw2">Arthur Soares</h1>
            <p className="mb0"><b>Seja bem vindo!</b> Este site é meu projeto pessoal, criado utilizando React!</p>
            <p className="mb2">Aqui você encontrará informações sobre mim e meu trabalho.</p>

            <Row>
              <Col sm="2" className="flex">
                <div className="flex mb1 dark-blue">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr1"/>
                  <a href="https://www.linkedin.com/in/arthursoas/" target="blank">LinkedIn</a>
                </div>
              </Col>
              <Col sm="2">
                <div className="flex">
                  <FontAwesomeIcon icon={faGithubSquare} size="lg" className="mr1"/>
                  <a href="https://github.com/arthursoas" target="blank">GitHub</a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br/>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGraduationCap} size="lg" className="mr1"/>
          <h3 className="fw2 mb0">Formação</h3>
        </div>
        <Row className="flex items-center">
          <Col>
            <p>Sou formado em Sistemas de Informação pela PUC-Minas desde 2018. Me formei com honras por ser o aluno com a segunda maior média durante todo o curso. Durante minha formação, aprendi a programar utilizando majoritariamente <b>C#</b></p>
            <p className="mb0">Ainda durante minha formação lidei com Python durante um projeto de iniciação científica, e durante meu TCC.</p>
          </Col>
          <Col lg="3">
            <a href="https://drive.google.com/file/d/1XYPJvf2zEhjeVmGu7F_phCNDXeZWtglD/view?usp=sharing" target="blank">
              <Button variant="outline-dark" className="left">
                <FontAwesomeIcon icon={faFileDownload} size="1x" className="mr1"/> Baixar Artigo do TCC
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    );
  };
};