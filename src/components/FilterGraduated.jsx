import React from 'react';

const FilterGraduated = props => {
  return (
    <div>
      <form>
        <label htmlFor="graduated">
          Graduated:
          <select onChange={props.handleGraduateChange}>
            <option selected disabled>
              Choose
            </option>
            <option value="true">Graduated</option>
            <option value="false">Not Graduated</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default FilterGraduated;
