import React, { Component } from 'react';
import { Consumer } from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
class AddWorkout extends Component {
  state = {
    name: '',
    reps: '',
    sets: '',
    restTime: '',
    weight: '',
    day: '',
    errors: {}
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, reps, sets, restTime, weight, day } = this.state;
    //Check for Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (reps === '') {
      this.setState({
        errors: { reps: "Don't forget ton enter the amount of reps" }
      });
      return;
    }

    if (restTime === '') {
      this.setState({ errors: { restTime: 'Rest is very importatn ' } });
      return;
    }

    if (weight === '') {
      this.setState({
        errors: {
          weight: "C'mon how you beat a record if you don't enter tat weight"
        }
      });
      return;
    }

    if (sets === '') {
      this.setState({ errors: { sets: 'Enter them sets' } });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      reps,
      sets,
      restTime,
      weight,
      day
    };
    dispatch({ type: 'ADD_WORKOUT', payload: newContact });
    //Clear State
    this.setState({
      name: '',
      reps: '',
      sets: '',
      restTime: '',
      weight: '',
      day: '',
      errors: {}
    });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, reps, sets, restTime, weight, day, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                Add Workout
                <i className="fas fa-dumbbell" />
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Enter Workout..."
                    value={name}
                    onChange={this.onChange}
                    errors={errors.name}
                  />
                  <TextInputGroup
                    type="number"
                    label="Repetitions"
                    name="reps"
                    placeholder="Enter number of reps"
                    value={reps}
                    onChange={this.onChange}
                    errors={errors.reps}
                  />
                  <TextInputGroup
                    type="number"
                    label="Rest Time"
                    name="restTime"
                    placeholder="Enter rest time"
                    value={restTime}
                    onChange={this.onChange}
                    errors={errors.restTime}
                  />

                  <TextInputGroup
                    type="number"
                    label="Weight"
                    name="weight"
                    placeholder="Enter weight amount"
                    value={weight}
                    onChange={this.onChange}
                    errors={errors.weight}
                  />
                  <TextInputGroup
                    type="number"
                    label="Sets"
                    name="sets"
                    placeholder="Enter number of sets"
                    value={sets}
                    onChange={this.onChange}
                    errors={errors.sets}
                  />

                  <div className="form-group">
                    <label htmlFor="day">Select day</label>
                    <select
                      name="day"
                      value={day}
                      onChange={this.onChange}
                      className="form-control"
                      id="day"
                    >
                      <option value="0">Sunday</option>
                      <option value="1">Monday</option>
                      <option value="2">Tuesday</option>
                      <option value="3">Wednesday</option>
                      <option value="4">Thursday</option>
                      <option value="5">Friday</option>
                      <option value="6">Saturday</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    value="Add Workout"
                    className="btn btn-outline-secondary btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddWorkout;
