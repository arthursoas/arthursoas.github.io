import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import './assets/css/main.scss';
import './assets/css/native.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './modules/home';
import NotFound from './modules/not_found';

render((
  <div className="base h-100 flex flex-column">
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
    <Container fluid className="h-auto flex-grow-1">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  </div>
), document.getElementById('root'));