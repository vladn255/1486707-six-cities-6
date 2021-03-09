import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action.js';

import {placeCardsType} from "../../types.js";
import {sortByPriceDown, sortByPriceUp, sortByRate} from "../../utils.js";
import {SortItems} from "../../const.js";

const SortMenuItems = ({unSortedPlaceCards, onChangePlaceCards}) => {
  const [isToggleOn, setToggle] = useState(false);
  const [sortItem, setSortItem] = useState(SortItems.POPULAR);

  const handleSortMenuOpenClick = () => {
    setToggle(!isToggleOn);
  };

  const handleSortMenuFocusOut = (evt) => {
    if (evt.currentTarget === `form`) {
      setToggle(false);
    }
  };

  const handleFilterPopularClick = () => {
    setSortItem(SortItems.POPULAR);
    onChangePlaceCards(unSortedPlaceCards);
  };

  const handleFilterPriceDownClick = () => {
    setSortItem(SortItems.PRICE_LOW_TO_HIGH);
    onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByPriceDown));
  };

  const handleFilterPriceUpClick = () => {
    setSortItem(SortItems.PRICE_HIGH_TO_LOW);
    onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByPriceUp));
  };

  const handleFilterTopRatedClick = () => {
    setSortItem(SortItems.TOP_RATED_FIRST);
    onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByRate));
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={handleSortMenuOpenClick}
      onBlur={handleSortMenuFocusOut} >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" >
        {sortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isToggleOn ? `places__options--opened` : ``}`}>
        <li className="places__option places__option--active" tabIndex="0"
          onClick={handleFilterPopularClick}
        >Popular</li>
        <li className="places__option" tabIndex="0"
          onClick={handleFilterPriceDownClick}
        >Price: low to high</li>
        <li className="places__option" tabIndex="0"
          onClick={handleFilterPriceUpClick}
        >Price: high to low</li>
        <li className="places__option" tabIndex="0"
          onClick={handleFilterTopRatedClick}
        >Top rated first</li>
      </ul>
    </form>
  );
};

SortMenuItems.propTypes = {
  placeCards: placeCardsType,
  unSortedPlaceCards: placeCardsType,
  onChangePlaceCards: PropTypes.func.isRequired
};

const mapStateToProps = ({placeCards, unSortedPlaceCards}) => ({
  placeCards,
  unSortedPlaceCards
});

const mapDispatchToProps = (dispatch) => ({
  onChangePlaceCards(cards) {
    dispatch(ActionCreator.setPlaceCards(cards));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuItems);
