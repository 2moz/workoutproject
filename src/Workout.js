import React, { Component } from 'react';

class Workout extends Component {
  render() {
    const { name, reps, sets, restTime, day, weight } = this.props.workout;
    let today = '';
    switch (day) {
      case 1:
        today = 'Monday';
        break;
      case 2:
        today = 'Tuesday';
        break;
      case 3:
        today = 'Wednesday';
        break;
      case 4:
        today = 'Thurday';
        break;
      case 5:
        today = 'Friday';
        break;
      case 6:
        today = 'Sarturday';
        break;
      case 0:
        today = 'Sunday';
        break;
      default:
        today = 'Day off';
    }

    return (
      <div>
        <h2>Workout: {name}</h2>
        <ul>
          <li>Day: {today}</li>
          <li>
            {' '}
            Reps:
            {reps}
          </li>
          <li>Sets: {sets}</li>
          <li>weight: {weight}</li>
          <li>Rest Time: {restTime}</li>
        </ul>
      </div>
    );
  }
}
export default Workout;
