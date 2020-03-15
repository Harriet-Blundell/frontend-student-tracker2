import React, { Component } from 'react';
import Axios from 'axios';
import { Router } from '@reach/router';
import SingleStudent from './singleStudent';
import { Link } from '@reach/router';
import AddNewStudent from './addNewStudent';
import SortBy from './sortBy';
import FilterByBlock from './FilterByBlock';
import Order from './order';

class AllStudents extends Component {
  state = {
    allStudents: [],
    sort_by: ''
  };

  fetchAllStudents = () => {
    return Axios.get(`https://nc-student-tracker.herokuapp.com/api/students`)
      .then(response => {
        const { students } = response.data;
        this.setState({ allStudents: students });
      })
      .catch(err => {
        console.dir(err);
      });
  };

  // checking if it has mounted and available to the DOM and only called ONCE after the FIRST render
  componentDidMount() {
    this.fetchAllStudents();
  }

  postNewStudent = newStudent => {
    return Axios.post(
      'https://nc-student-tracker.herokuapp.com/api/students',
      newStudent
    ).then(res => {
      this.setState(currentState => {
        return {
          allStudents: [res.data.student, ...currentState.allStudents]
        };
      });
    });
  };

  sortByRequest = () => {
    return Axios.get(
      `https://nc-student-tracker.herokuapp.com/api/students?sort_by=${this.state.sort_by}`
    ).then(res => {
      this.setState({
        allStudents: res.data.students
      });
    });
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.sortByRequest();
    }
  }

  orderRequest = value => {
    return Axios.get(
      `https://nc-student-tracker.herokuapp.com/api/students?order=${value}`
    ).then(res => {
      this.setState({
        allStudents: res.data.students
      });
    });
  };

  blockRequest = value => {
    return Axios.get(
      `https://nc-student-tracker.herokuapp.com/api/students?block=${value}`
    ).then(res => {
      this.setState({
        allStudents: res.data.students
      });
    });
  };

  render() {
    const { allStudents } = this.state;
    return (
      <div className="allStudents">
        <br />
        <AddNewStudent postNewStudent={this.postNewStudent} />
        <br />
        <SortBy handleChange={this.handleChange} />
        <br />
        <FilterByBlock blockRequest={this.blockRequest} />
        <br />
        <Order orderRequest={this.orderRequest} />
        <Router>
          <SingleStudent path="/:student_id" />
        </Router>
        <ul>
          {allStudents.map(students => {
            return (
              <li className="studentCards" key={students._id}>
                <Link to={`/students/${students._id}`}>
                  <h1>{students.name}</h1>
                </Link>
                <h2>Starting Cohort:</h2> <p>{students.startingCohort}</p>
                <h3>Current Block:</h3> <p>{students.currentBlock}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllStudents;
