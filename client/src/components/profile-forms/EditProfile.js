import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Muokkaa profiilia</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Tee muutoksia profiilisi tietoihin
      </p>
      <small>* = pakollinen tieto</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option>* Ammatti status</option>
            <option value='Developer'>Kehittäjä</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Pomo</option>
            <option value='Student or Learning'>Opiskelija</option>
            <option value='Instructor'>Opettaja tai ohjaaja</option>
            <option value='Intern'>Haahuilija</option>
            <option value='Other'>Joku muu</option>
          </select>
          <small className='form-text'>
            Missä olet menossa urallasi?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Yritys'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Oma yritys tai palkkatyö
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Webbisivu'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Yrityksen verkkosivut
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Sijainti'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Kaupunki & Maa (esim. Lahti, Suomi)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* osaaminen'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Käytä pilkkuerotinta (esim. C#,HTML,CSS,JavaScript)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Käyttäjänimi'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Jos haluat koodisi ja projektisi näkymään anna GitHub käyttäjätunnus
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Lyhyt kuvaus'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Kerro jotain itsestäsi</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Some linkkejä
          </button>
          <span>Vapaaehtoinen</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter osoite'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook osoite'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube osoite'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin osoite'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram osoite'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Palaa takaisin
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
