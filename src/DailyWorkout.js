import React, { Component } from 'react';
class DailyWorkout extends Component {
  render() {
    const { name, reps, sets, restTime, weight } = this.props.workoutDay;

    return (
      <div>
        <ul>
          <li> Workout :{name} </li>
          <li>
            {' '}
            Reps:
            {reps}
          </li>
          <li>
            Sets:
            {sets}{' '}
          </li>
          <li>
            Weight:
            {weight}{' '}
          </li>
          <li>Rest Time: {restTime}</li>
        </ul>
      </div>
    );
  }
}
export default DailyWorkout;
