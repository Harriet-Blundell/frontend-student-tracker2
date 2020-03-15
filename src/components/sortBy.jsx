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
            <option value="name">Name</option>
            <option value="startingCohort">Starting Cohort</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default SortBy;
