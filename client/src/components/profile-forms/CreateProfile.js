import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
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
		createProfile(formData, history);
	};
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
			<Fragment>
				<h1 className='large text-primary'>Luo profiili</h1>
				<p className='lead'>
					<i className='fas fa-user' /> Tee profiilistasi kiinnostavaa luettavaa
			</p>
				<small>* = pakollinen tieto</small>
				<form className='form' onSubmit={e => onSubmit(e)}>
					<div className='form-group'>
						<select name='status' value={status} onChange={e => onChange(e)}>
							<option value='0'>* Nimike</option>
							<option value='Developer'>Developer</option>
							<option value='Junior Developer'>Junior Developer</option>
							<option value='Senior Developer'>Senior Developer</option>
							<option value='Manager'>Pomo</option>
							<option value='Student or Learning'>Opiskelija</option>
							<option value='Instructor'>Opettaja tai ohjaaja</option>
							<option value='Intern'>Haahuilija</option>
							<option value='Other'>Jokin muu</option>
						</select>
						<small className='form-text'>
							Missä kohtaa olet menossa urallasi
					</small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Company'
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
							placeholder='Website'
							name='website'
							value={website}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Yrityksen webbisivu
					</small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Location'
							name='location'
							value={location}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Kaupunki & maa (esim. Porvoo, Suomi)
					</small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='* Skills'
							name='skills'
							value={skills}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Käytä pilkkua erottimena (esim. C#,Python,HTML,CSS,JavaScript)
					</small>
					</div>
					<div className='form-group'>
						<input
							type='text'
							placeholder='Github Username'
							name='githubusername'
							value={githubusername}
							onChange={e => onChange(e)}
						/>
						<small className='form-text'>
							Jos haluat näyttää koodisi ja projektisi anna github käyttäjänimi
					</small>
					</div>
					<div className='form-group'>
						<textarea
							placeholder='A short bio of yourself'
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

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);
