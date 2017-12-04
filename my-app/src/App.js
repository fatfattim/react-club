import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';

class VerifyTyping extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

VerifyTyping.propTypes = {
  //Exam 1
  name: PropTypes.string,

  //Exam 2
  customProp: function(props, propName, componentName) {
    if (props[propName] !== "Tim is so handsome") {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  }
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <VerifyTyping name={123} customProp="^__^"/>
      </div>
    );
  }
}

export default App;
