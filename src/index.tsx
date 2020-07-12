import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
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
import About from './modules/about/about';
import Home from './modules/home/home';
import NotFound from './modules/not_found/not_found';

render((
  <div className="base h-100 flex flex-column">
      <HashRouter basename="/">
        <NavBar/>
        <Container fluid className="h-auto flex-grow-1 mt3">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </Container>
      </HashRouter>
    <Footer/>
  </div>
), document.getElementById('root'));