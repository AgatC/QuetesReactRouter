import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Home from './Home';
import History from './History';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><NavLink to="/"> Accueil </NavLink></li>
            <li><NavLink to="/notre-histoire" activeStyle={
              { color: 'red' }}> Histoire  </NavLink></li>
          </ul>
          <Route path="/" exact component={Home} />
          <Route path="/notre-histoire" exact component={History} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
