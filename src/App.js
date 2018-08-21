import React, { Component } from 'react';
import './App.css';
import UserWorkouts from './components/UserWorkouts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Workout App" />
        <div className="container">
          <UserWorkouts />
        </div>
      </div>
    );
  }
}

export default App;
