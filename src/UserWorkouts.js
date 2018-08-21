import React, { Component } from 'react';
import Workout from './Workout';
import DailyWorkout from './DailyWorkout';
import Day from './Day';
class UserWorkouts extends Component {
  state = {
    users: {
      name: 'Tomas Flores',
      emai: 'tomas@gmail.com',
      workouts: [
        {
          id: 1, // make the index the day ? eq index + 1
          name: 'benchpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 1
        },
        {
          id: 2,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 3
        },
        {
          id: 3,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 4
        },
        {
          id: 4,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 5
        },
        {
          id: 5,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 6
        },
        {
          id: 6,
          name: 'shoulder',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 1
        },
        {
          id: 7,
          name: 'legpress',
          reps: 8,
          sets: 4,
          restTime: 5,
          weight: 50,
          day: 1
        }
      ]
    }
  };
  render() {
    const { users } = this.state;
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
    console.log(arr);
    return (
      <div>
        <Day name={users.name} today={dDay} />{' '}
        {arr.map(workDay => (
          <DailyWorkout key={workDay.id} workoutDay={workDay} />
        ))}
        {users.workouts.map(workout => (
          <Workout key={workout.id} workout={workout} />
        ))}
      </div>
    );
  }
}
export default UserWorkouts;
