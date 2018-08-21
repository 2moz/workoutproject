import React, { Component } from 'react';
class DailyWorkout extends Component {
  render() {
    const { name, reps, sets, restTime, weight } = this.props.workoutDay;

    return (
      <div className="card card-body mb-3">
        <ul className="list-group">
          <li className="list-group-item"> Workout : {name} </li>
          <li className="list-group-item">
            {' '}
            Reps:
            {reps}
          </li>
          <li className="list-group-item">
            Sets:
            {sets}{' '}
          </li>
          <li className="list-group-item">
            Weight:
            {weight}{' '}
          </li>
          <li className="list-group-item">Rest Time: {restTime}</li>
        </ul>
      </div>
    );
  }
}
export default DailyWorkout;
