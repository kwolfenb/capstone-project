import React from 'react';
import Header from './Header';
import Body from './Body';

import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router >

        <div className="App">
        <Route exact path='/' component={Header}></Route>
        <Route path='/body' component={Body}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
