import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BootstrapLogoImage from '../../assets/images/bootstrap-logo.png';
import FontAwesomeLogoImage from '../../assets/images/font-awesome-logo.png';
import ReactLogoImage from '../../assets/images/react-logo.png';
import ReactRouterLogoImage from '../../assets/images/react-router-logo.png';
import TypescriptLogoImage from '../../assets/images/typescript-logo.png';

export default class About extends Component {
  render() {
    return (
      <Container>
        <h1 className="fw2">Sobre</h1>
        <p className="mb0">Este é meu site pessoal. Não há finalidade de renda ou monetização a partir dele. Aqui você pode ver um pouco sobre meu trabalho.</p>
        <p className="mb4">Para criar este site foram utilizadas as seguintes tecnologias e dependências:</p>

        <Row className="mb3 flex items-center">
          <Col lg="1">
            <img src={BootstrapLogoImage} className="mr3 w-80" alt="Bootstrap logo"/>
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">Bootstrap</h4>
            <p className="mb0">Utilizado como toolkit frontend deste site. Consulte a biblioteca react-bootstrap.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col lg="1">
            <img src={FontAwesomeLogoImage} className="mr3 w-80" alt="Font Awesome logo"/>
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">Font Awesome</h4>
            <p className="mb0">Utilizado para os ícones deste site.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col lg="1">
            <img src={ReactLogoImage} className="mr3 w-80" alt="React logo"/>
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">React</h4>
            <p className="mb0">A base deste projeto. Todo este site foi criado utilizando React, do zero, sem templates prontos.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col lg="1">
            <img src={ReactRouterLogoImage} className="mr3 w-80" alt="React Router logo"/>
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">React Router</h4>
            <p className="mb0">Utilizado para roteamento das páginas deste site.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col lg="1">
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">Tachyons</h4>
            <p className="mb0">Toolkit CSS que diminui a quantidade de CSS necessário neste site.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col lg="1">
            <img src={TypescriptLogoImage} className="mr3 w-80" alt="React logo"/>
          </Col>
          <Col lg className="flex flex-column">
            <h4 className="fw3 mb1">Typescript</h4>
            <p className="mb0">Linguagem utilizada como base para o React.</p>
          </Col>
        </Row>
      </Container>
    );
  };
};