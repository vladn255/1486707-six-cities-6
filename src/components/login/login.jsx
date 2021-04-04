import React, {useRef} from 'react';
import {Link, useHistory, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {checkAuth, login} from "../../store/api-actions.js";
import {RoutePath, AuthorizationStatus} from '../../const.js';
import {getAuthorizationStatus} from '../../store/user-data/selectors.js';


const Login = ({onSubmit, authorizationStatus}) => {

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={RoutePath.MAIN} />
    );
  }

  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onLoginError = () => {
    loginRef.current.value = `login error`;
    passwordRef.current.value = ``;
  };

  const onLoginSuccess = () => {
    history.push(RoutePath.MAIN);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!validateEmail(loginRef.current.value)) {
      loginRef.current.value = `invalid email`;
      return;
    }

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value
    }, onLoginSuccess, onLoginError);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={RoutePath.MAIN} className="header__logo-link" href="#">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit"

              >Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData, onSuccess, onError) {
    return dispatch(login(authData))
    .then(() => {
      dispatch(checkAuth());
      onSuccess();
    })
    .catch(() => onError());
  }
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
