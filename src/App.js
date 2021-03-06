import React, { Component } from 'react';
import './App.css';
import UserWorkouts from './components/workout/UserWorkouts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import AddWorkout from './components/workout/AddWorkout';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Workout App" />
          <div className="container">
            <AddWorkout />
            <UserWorkouts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
