import React, { Component } from 'react';

class Order extends Component {
  state = {
    order: ''
  };

  handleChange = event => {
    this.setState({ order: event.target.value });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.order !== this.state.order) {
      this.props.orderRequest(this.state.order);
    }
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Order:
            <select onChange={this.handleChange}>
              <option selected disabled>
                Choose
              </option>
              <option>asc</option>
              <option>desc</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Order;
