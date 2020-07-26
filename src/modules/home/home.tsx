import React, { Component, ReactNode } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faFilePdf, faQuoteLeft, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { delayAsync } from '../../misc';
import { HomeState } from './HomeState';

import MeImage from '../../assets/images/me.jpg';
import MSFLogoImage from '../../assets/images/msf-logo.png';

export default class Home extends Component<{}, HomeState> {
  alertContdown: number = 10;

  constructor(props: any) {
    super(props);

    this.state = {
      alertCountdown: this.alertContdown,
      showAlert: true
    };
  };

  async componentDidMount() {
    this.startAlertCountdownAsync();
  }

  async startAlertCountdownAsync(): Promise<void> {
    for (let index: number = this.alertContdown; index > 0; index --) {
      await delayAsync(1000);
      this.setState(
        {...this.state, alertCountdown: this.state.alertCountdown - 1}
      );
      if (this.state.alertCountdown === 0) {
        this.setState({...this.state, showAlert: false});
      }
    }
  }

  render(): ReactNode {
    return (
      <Container>
        { this.state.showAlert &&
          <Alert variant="danger" dismissible onClose={
            () => this.setState({...this.state, showAlert: false})
          }>
            <b>({this.state.alertCountdown}) Atenção: </b>Este projeto está desenvolvimento. Bugs podem ser encontrados.
          </Alert>
        }
        <Row className="mb3">
          <Col lg="2" className="flex justify-center justify-start-ns">
            <img src={MeImage} className="h4 br-pill mr3 ba bw1 items-start-ns items-center" alt="Arthur's Profile"/>
          </Col>
          <Col lg className="flex flex-column">
            <h1 className="fw2 tc tl-ns">Arthur Soares</h1>
            <p className="mb0"><b>Seja bem vindo!</b> Este site é meu projeto pessoal, criado utilizando React!</p>
            <p className="mb2">Aqui você encontrará informações sobre mim e meu trabalho.</p>

            <Row>
              <Col sm="2" className="flex">
                <div className="flex mb1 cl-linkedin-blue">
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
        <div className="flex mb2">
          <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="mr2 mt2"/>
          <p className="f3 fw3">
            Não há tal coisa como a perfeição. Este mundo não é perfeito e, por isso, ele é lindo.
          </p>
        </div>

        {/* Schooling */}
        <div className="mb4">
          <div className="flex items-center mb2">
            <FontAwesomeIcon icon={faGraduationCap} size="lg" className="mr1"/>
            <h3 className="fw3 mb0">Formação</h3>
          </div>
          <p className="mb0">Sou formado em <b>Sistemas de Informação</b> pela PUC-Minas desde 2018.</p>
          <p>Durante meu TCC investiguei como as pessoas se engajam com bots no Twitter. Caso se interesse, clique no botão abaixo:</p>
          <a href="https://drive.google.com/file/d/1XYPJvf2zEhjeVmGu7F_phCNDXeZWtglD/view?usp=sharing" target="blank">
            <Button variant="outline-dark" className="left">
              <FontAwesomeIcon icon={faFilePdf} size="1x" className="mr1"/> Visualizar Artigo
            </Button>
          </a>
        </div>

        {/* Human Aid */}
        <div className="flex items-center mb2">
          <FontAwesomeIcon icon={faHandsHelping} size="lg" className="mr1"/>
          <h3 className="fw3 mb0">Ajuda Humanitária</h3>
        </div>
        <Row className="mb3 flex items-center">
          <Col sm="1" className="dn di-ns">
            <a href="https://www.msf.org.br/" target="blank">
              <img src={MSFLogoImage} className="mr3 w-80" alt="Médicos sem fronteiras logo"/>
            </a>
          </Col>
          <Col sm className="flex flex-column">
            <p className="mb0">Seja doador <b>Médicos Sem Fronteiras</b>. São aceitas doações de qualquer valor a partir de R$ 10,00.</p>
            <a href="https://www.msf.org.br/" target="blank">Clique aqui para doar!</a>
          </Col>
        </Row>
      </Container>
    );
  };
};