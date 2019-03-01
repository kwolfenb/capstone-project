import React, { Component } from 'react';
import './App.css';
import Header from './Header';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Header />
      </div>
    );
  }
}

export default App;
