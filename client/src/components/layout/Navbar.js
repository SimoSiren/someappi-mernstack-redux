import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Devaajat</Link>
      </li>
      <li>
        <Link to='/posts'>Postaukset</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Pääsivu</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Kirjaudu ulos</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Devaajat</Link>
      </li>
      <li>
        <Link to='/register'>Luo tili</Link>
      </li>
      <li>
        <Link to='/login'>Kirjaudu</Link>
      </li>
    </ul>
  )

  const style = {
    color: 'lightBlue'
  }

  return (
    <nav className='navbar bg-dark'>
      <h2>
        <Link to='/'>
          <i className='fas fa-home' /> some-app etusivu
        </Link>

        <a href='http://kaveri-chatti.herokuapp.com' target="_blank"
          rel="noopener noreferrer"><i className='fas fa-comment' />
          {' '}Kaveri-chatti
        </a>
      </h2>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
