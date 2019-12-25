import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Now' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Tehtävä: </strong> {title}
      </p>
      <p>
        <strong>Sijainti: </strong> {location}
      </p>
      <p>
        <strong>Kuvaus: </strong> {description}
      </p>
    </div>
  );

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
