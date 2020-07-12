import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Styles
import './assets/css/main.scss';
import './assets/css/misc.scss';
import './assets/css/native.scss';
import './assets/css/colors.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

// Modules
import Home from './modules/home/home';
import NotFound from './modules/not_found/not_found';

render((
  <div className="base h-100 flex flex-column">
      <HashRouter basename="/">
        <NavBar/>
        <Container fluid className="h-auto flex-grow-1 mt3">
            <Route exact path='/' component={Home}/>
            <Route path='/articles' component={NotFound}/>
        </Container>
      </HashRouter>
    <Footer/>
  </div>
), document.getElementById('root'));