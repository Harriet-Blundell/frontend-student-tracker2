import React, { Component } from 'react';
import Axios from 'axios';

class Blocks extends Component {
  state = {
    blocks: []
  };

  fetchBlocks = () => {
    return Axios.get(
      'https://nc-student-tracker.herokuapp.com/api/blocks'
    ).then(res => {
      const { blocks } = res.data;
      this.setState({
        blocks: blocks
      });
    });
  };

  componentDidMount() {
    this.fetchBlocks();
  }

  render() {
    const { blocks } = this.state;
    return (
      <div>
        <h1>Block Information:</h1>
        <ul>
          {blocks.map(allBlocks => {
            return (
              <li key={allBlocks._id}>
                <h2>ID:</h2> <p>{allBlocks._id}</p>
                <h3>Number:</h3> <p>{allBlocks.number}</p>
                <h4>Name:</h4> <p>{allBlocks.name}</p>
                <h5>Slug:</h5> <p>{allBlocks.slug}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Blocks;
