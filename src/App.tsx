import React, { Component } from 'react';
import logo from './logo.svg';
import './App.sass';
import { Button } from './components/Button';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
          <button
            className='btn'
          >
            Button one
          </button>
          <Button/>
        </header>
      </div>
    );
  }
}
