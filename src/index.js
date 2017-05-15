import React from 'react';
import ReactDOM, { render } from 'react-dom';
import ReactPongApp from './components/ReactPongApp.react';
import Login from './components/Login.react';
import Register from './components/Register.react';
import NotFound from './components/NotFound.react';
import MisJuegos from './components/MisJuegos.react';
import Conectados from './components/Conectados.react';
import CuadroHonor from './components/CuadroHonor.react';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

render(<Router history = {hashHistory}>
      <Route path = "/" component = {Login} />
      <Route path = "/register" component = {Register} />
      <Route path = "/login" component = {Login} />
      <Route path = "/jugar" component = {ReactPongApp} />
      <Route path = "/misjuegos" component = {MisJuegos} />
      <Route path = "/conectados" component = {Conectados} />
      <Route path = "/honor" component = {CuadroHonor} />
      <Route path = "*" component = {NotFound} />
</Router>, document.getElementById('content'));
