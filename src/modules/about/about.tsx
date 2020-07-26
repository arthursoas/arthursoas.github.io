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
          <Col xs="1" className="dn di-ns">
            <img src={BootstrapLogoImage} className="w-80" alt="Bootstrap logo"/>
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">Bootstrap</h4>
            <p className="mb0">Utilizado como toolkit frontend deste projeto.</p>
            <p>Conheça o <a href="https://getbootstrap.com/" target="blank">Bootstrap</a> e o <a href="https://react-bootstrap.github.io/" target="blank">React Bootstrap</a>.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col xs="1" className="dn di-ns">
            <img src={FontAwesomeLogoImage} className="w-80" alt="Font Awesome logo"/>
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">Font Awesome</h4>
            <p className="mb0">Utilizado para os ícones deste projeto.</p>
            <p>Conheça o <a href="https://fontawesome.com/" target="blank">Font Awesome</a> e o <a href="https://github.com/FortAwesome/react-fontawesome" target="blank">React Font Awesome</a>.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col xs="1" className="dn di-ns">
            <img src={ReactLogoImage} className="w-80" alt="React logo"/>
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">React</h4>
            <p className="mb0">A base de tudo. Todo este projeto foi criado utilizando React, do zero, sem templates prontos.</p>
            <p>Conheça o <a href="https://reactjs.org/" target="blank">React</a>.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col xs="1" className="dn di-ns">
            <img src={ReactRouterLogoImage} className="w-80" alt="React Router logo"/>
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">React Router</h4>
            <p className="mb0">Utilizado para roteamento das páginas deste projeto.</p>
            <p>Conheça o <a href="https://reactrouter.com/" target="blank">React Router</a>.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col xs="1" className="dn di-ns">
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">Tachyons</h4>
            <p className="mb0">Toolkit CSS que diminui a quantidade de CSS necessário neste projeto.</p>
            <p>Conheça o <a href="https://tachyons.io/" target="blank">Tachyons</a>.</p>
          </Col>
        </Row>

        <Row className="mb3 flex items-center">
          <Col xs="1" className="dn di-ns">
            <img src={TypescriptLogoImage} className="w-80" alt="React logo"/>
          </Col>
          <Col xs className="flex flex-column">
            <h4 className="fw3 mb1">TypeScript</h4>
            <p className="mb0">Linguagem utilizada como base para o React.</p>
            <p>Conheça o <a href="https://www.typescriptlang.org/" target="blank">TypeScript</a>.</p>
          </Col>
        </Row>
      </Container>
    );
  };
};