import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_WORKOUT':
      let newUser = {
        name: state.users.name,
        email: state.users.email,
        workouts: state.users.workouts.filter(
          user => user.id !== action.payload
        )
      };

      return {
        ...state,

        users: newUser
      };
    case 'ADD_WORKOUT':
      newUser = {
        name: state.users.name,
        email: state.users.email,
        workouts: [action.payload, ...state.users.workouts]
      };
      console.log(action.payload);
      return {
        ...state,

        users: newUser
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    users: {
      name: 'Tomas Flores',
      email: 'tomas@gmail.com',
      workouts: [
        {
          id: 1,
          name: 'benchpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '1'
        },
        {
          id: 2,
          name: 'benchpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '2'
        },
        {
          id: 3,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '4'
        },
        {
          id: 4,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '0'
        },
        {
          id: 5,
          name: 'pull overs',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '6'
        },
        {
          id: 6,
          name: 'shoulder',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '1'
        },
        {
          id: 7,
          name: 'squats',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: '1'
        }
      ]
    },
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
