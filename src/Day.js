import React, { Component } from 'react';

class Day extends Component {
  render() {
    const { name, today } = this.props;
    return (
      <div>
        {' '}
        <h1>{name}</h1>
        <h2>{today}</h2>
      </div>
    );
  }
}
export default Day;
