import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{moment.utc(from)}</Moment> -{' '}
        {!to ? ' Nyt' : <Moment format="DD/MM/YYYY">{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Koulutusaste: </strong> {degree}
      </p>
      <p>
        <strong>Ala: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Kuvaus: </strong> {description}
      </p>
    </div>
  );

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
