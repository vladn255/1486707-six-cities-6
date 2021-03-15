import React from 'react';
import {Link} from 'react-router-dom';
import {RoutePath} from "../../const.js";

const NotFound = () => {
  return (
    <div>
      <h1>404 NotFound</h1>
      <Link to={RoutePath.MAIN}>
        <span>Go to main page</span>
      </Link>
    </div>
  );
};

export default NotFound;
