import React from 'react';

const Errors = ({ errors }) => {
  return (
    <div className="errors">
      { errors.join('  |  ') }
    </div>
  );
};

export default Errors;
