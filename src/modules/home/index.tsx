import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

import  MeImage from '../../assets/images/me.png';

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
      <Container className="mt3">
        { this.state.showAlert &&
          <Alert variant="dark" dismissible onClose={() => this.setState({...this.state, showAlert: false})}>
            <b>Atenção: </b>Este projeto pode estar incompleto. E provavelmente está.
          </Alert>
        }
        <div className="flex">
          <img src={MeImage} className="h4 br-pill mr3" alt="Direction Sign"/>
          <div className="flex-column">
            <h1>Arthur Soares</h1>
            <p className="mb0"><b>Seja bem vindo!</b> Este site é meu projeto pessoal, criado com React do zero (sem templates prontos).</p>
            <p className="mb0">Aqui você encontrará informações sobre mim e meu trabalho.</p>
          </div>
        </div>
      </Container>
    );
  };
};