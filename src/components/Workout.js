import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Workout extends Component {
  state = {
    showWorkoutInfo: false
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  onShowClick = () => {
    this.setState({ showWorkoutInfo: !this.state.showWorkoutInfo });
  };
  render() {
    const { name, reps, sets, restTime, day, weight } = this.props.workout;
    const { showWorkoutInfo } = this.state;
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
      <div className="card card-body mb-3">
        <h2>
          Workout: {name}{' '}
          <i
            onClick={this.onShowClick}
            className={
              showWorkoutInfo ? 'fas fa-angle-down' : 'fas fa-angle-left'
            }
            style={{ cursor: 'pointer' }}
          />
          <i
            className="far fa-minus-square"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick}
          />
        </h2>
        {showWorkoutInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Day: {today}</li>
            <li className="list-group-item">
              {' '}
              Reps:
              {reps}
            </li>
            <li className="list-group-item">Sets: {sets}</li>
            <li className="list-group-item">weight: {weight}</li>
            <li className="list-group-item">Rest Time: {restTime}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Workout;
