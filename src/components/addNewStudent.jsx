import React, { Component } from 'react';

class AddNewStudent extends Component {
  state = {
    name: '',
    startingCohort: ''
  };

  handleChange = (text, key) => {
    this.setState({ [key]: text });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, startingCohort } = this.state;
    const { postNewStudent } = this.props;
    postNewStudent({ name, startingCohort });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Type Name"
            onChange={event => {
              this.handleChange(event.target.value, 'name');
            }}
          />{' '}
          <label htmlFor="startingCohort">Starting Cohort:</label>
          <input
            type="text"
            id="startingCohort"
            placeholder="Type Number"
            onChange={event =>
              this.handleChange(event.target.value, 'startingCohort')
            }
          />{' '}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNewStudent;
