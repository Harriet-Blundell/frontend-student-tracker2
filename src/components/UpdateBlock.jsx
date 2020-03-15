import React from 'react';

const UpdateBlock = props => {
  return (
    <div>
      <form>
        <label>
          Progress:
          <select onChange={props.handleChange}>
            <option selected disabled>
              Choose
            </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default UpdateBlock;
