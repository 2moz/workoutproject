import React, { Component } from 'react';
import './App.css';
import UserWorkouts from './components/workout/UserWorkouts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Workout App" />
          <div className="container">
            <UserWorkouts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
