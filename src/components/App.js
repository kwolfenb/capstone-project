import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
