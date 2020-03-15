import React, { Component } from 'react';

class FilterByBlock extends Component {
  state = {
    block: ''
  };

  handleChange = event => {
    this.setState({ block: event.target.value });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.block !== this.state.block) {
      this.props.blockRequest(this.state.block);
    }
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="block">
            Blocks:
            <select onChange={this.handleChange}>
              <option selected disabled>
                Choose
              </option>
              <option value="fun">Fundamentals</option>
              <option value="be">Back End</option>
              <option value="fe">Front End</option>
              <option value="proj">Project Phase</option>
              <option value="grad">Graduate</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default FilterByBlock;
