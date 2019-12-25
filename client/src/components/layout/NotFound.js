import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Sivua ei löydy
      </h1>
      <p className='large'>Sivua ei löydy. Sorppa :( </p>
    </Fragment>
  );
};

export default NotFound;
