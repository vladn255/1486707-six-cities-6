import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AuthorizationStatus, RoutePath} from "../../const.js";
import {getAuthorizationStatus, getCurrentUser, getServerErrorStatus} from '../../store/user-data/selectors.js';


const HeaderUserInfo = ({authorizationStatus, currentUser: {avatarUrl, email}, serverErrorStatus}) => {

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={RoutePath.FAVORITES} className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"
            style={authorizationStatus === AuthorizationStatus.AUTH
              ? {backgroundImage: avatarUrl}
              : {}
            }
          >
          </div>
          <span className="header__user-name user__name">
            {authorizationStatus === AuthorizationStatus.AUTH
              ? `${email}`
              : `Sign in`}
          </span>
        </Link>
      </li>
      <span >
        {serverErrorStatus
          ? `...server connection error`
          : ``}
      </span>
    </ul>
  );
};

HeaderUserInfo.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentUser: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  serverErrorStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  currentUser: getCurrentUser(state),
  serverErrorStatus: getServerErrorStatus(state)
});

export {HeaderUserInfo};
export default connect(mapStateToProps)(HeaderUserInfo);
