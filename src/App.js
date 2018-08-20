import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: {
      name: 'Tomas flores',
      emai: 'tomas@gmail.com',
      workouts: [
        {
          wourkoutName: 'benchpress',
          reps: '8',
          sets: '4',
          restTime: '5',
          day: '2'
        }
      ]
    }
  };

  render() {
    const { users } = this.state;
    return <div className="App">{console.log(users.workouts)}</div>;
  }
}

export default App;
