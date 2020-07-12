import React, { Component } from 'react';

import NotFoundImage from '../../assets/images/not-found.png';

export default class Notfound extends Component {
  render() {
    return (
      <div className="centralized h-100">
        <img src={NotFoundImage} className="h4" alt="Direction Sign"/>
        <p className="f-subheadline-ns mb0">404</p>
        <p className="f4-ns tc">Oops. Você parece estar perdido. <a href="/">Clique aqui</a> para retornar a página inical.</p>
      </div>
    );
  };
};