import React from 'react';
import Body from './Body';
import Template1 from './Template1';
import Template2 from './Template2';

import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router >

        <div className="App">
        <Route exact path='/' component={Body}></Route>
        <Route path='/template1' component={Template1}></Route>
        <Route path='/template2' component={Template2}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
