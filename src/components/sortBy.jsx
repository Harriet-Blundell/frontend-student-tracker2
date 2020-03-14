import React from 'react';

function SortBy(props) {
  return (
    <div>
      <form>
        <label htmlFor="sort_by">
          Sort By:
          <select onChange={props.handleChange}>
            <option selected disabled>
              Choose
            </option>
            <option name="name">name</option>
            <option name="startingCohort">startingCohort</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default SortBy;
