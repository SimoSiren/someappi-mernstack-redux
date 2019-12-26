import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Salasanat eivät täsmää', 'danger')
    } else {
      register({ name, email, password })
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>
        <i className='fas fa-user' /> Tilin luominen
      </h1>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nimi'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Sähköposti'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Jos käytät gravatarilla varustettua sähköpostia, kuvaasi käytetään profiilissa.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Salasana'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Salasanan varmistus'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Luo tili' />
      </form>
      <p className='my-1'>
        Mikäli sinulla on jo tili... <Link to='/login'>Kirjaudu täältä</Link>
      </p>
    </Fragment>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register)
