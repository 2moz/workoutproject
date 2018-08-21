import React, { Component } from 'react';
import Workout from './Workout';
import DailyWorkout from './DailyWorkout';
import Day from './Day';
import { Consumer } from '../../Context';
class UserWorkouts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { users } = value;
          let dt = new Date();
          let today = dt.getDay();
          const arr = users.workouts.filter(word => word.day === today);
          let dDay = '';
          switch (today) {
            case 1:
              dDay = 'Monday';
              break;
            case 2:
              dDay = 'Tuesday';
              break;
            case 3:
              dDay = 'Wednesday';
              break;
            case 4:
              dDay = 'Thurday';
              break;
            case 5:
              dDay = 'Friday';
              break;
            case 6:
              dDay = 'Sarturday';
              break;
            case 0:
              dDay = 'Sunday';
              break;
            default:
              dDay = 'Day off';
          }

          return (
            <React.Fragment>
              <Day name={users.name} today={dDay} />{' '}
              {arr.map(workDay => (
                <DailyWorkout key={workDay.id} workoutDay={workDay} />
              ))}
              {users.workouts.map(workout => (
                <Workout key={workout.id} workout={workout} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default UserWorkouts;
