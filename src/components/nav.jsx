import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <div>
      <button className="home-button">
        <Link to="/" className="home-link">
          Home
        </Link>
      </button>{' '}
      <button className="student-button">
        <Link to="/students" className="student-link">
          Students
        </Link>
      </button>
      <button className="block-button">
        <Link to="/blocks" className="block-link">
          Blocks
        </Link>
      </button>
    </div>
  );
};

export default NavBar;
