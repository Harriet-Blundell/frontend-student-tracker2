import React from 'react';
import Axios from 'axios';

class SingleStudent extends React.Component {
  state = {
    student: {},
    isLoading: true
  };

  fetchStudent = () => {
    return Axios.get(
      `https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`
    )
      .then(response => {
        this.setState({ student: response.data.student, isLoading: false });
      })
      .catch(err => console.dir(err));
  };

  componentDidMount() {
    this.fetchStudent();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.student_id !== this.props.student_id) {
      this.fetchStudent();
    }
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading === true) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <ul>
          <h1>Selected Student Information:</h1>
          <h2>{this.state.student.name}</h2>
          <h3>ID:</h3>
          <p>{this.state.student._id}</p>
          <h4>Block History:</h4>
          {this.state.student.blockHistory.map((singleStudent, index) => {
            return (
              <li key={index}>
                <p>{singleStudent.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SingleStudent;
