import React from 'react';
import Axios from 'axios';
import UpdateBlock from './UpdateBlock';

class SingleStudent extends React.Component {
  state = {
    student: {},
    progress: '',
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

  updateBlockHistory = () => {
    return Axios.patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}?progress=${this.state.progress}`
    ).then(res => {
      this.setState({
        student: res.data.student
      });
    });
  };

  componentDidMount() {
    this.fetchStudent();
  }

  handleChange = event => {
    this.setState({ progress: event.target.value });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.student_id !== this.props.student_id) {
      this.fetchStudent();
    } else if (prevState.progress !== this.state.progress) {
      this.updateBlockHistory();
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
        <UpdateBlock handleChange={this.handleChange} />
      </div>
    );
  }
}

export default SingleStudent;
