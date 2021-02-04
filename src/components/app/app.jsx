import React from 'react';
import PropTypes from 'prop-types';

import MainScreenComponent from "../main/main.jsx";

const App = (props) => {
  const {placeCards} = props;

  return (
    <MainScreenComponent placeCards={placeCards}/>
  );
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.object)
};

export default App;
