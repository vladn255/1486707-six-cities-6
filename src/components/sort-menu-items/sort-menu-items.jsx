import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action.js';

import {placeCardsType} from "../../types.js";
import {sortByPriceDown, sortByPriceUp, sortByRate} from "../../utils.js";
import {SortItems} from "../../const.js";

const SortMenuItems = ({unSortedPlaceCards, onChangePlaceCards, currentSortItem, onSetSortItem}) => {
  const [isToggleOn, setToggle] = useState(false);

  const handleSortMenuOpenClick = () => {
    setToggle(!isToggleOn);
  };

  const handleSortMenuFocusOut = (evt) => {
    if (evt.currentTarget === `form`) {
      setToggle(false);
    }
  };

  const handleFilterClick = (evt) => {
    switch (evt.target.dataset.sortItem) {
      case SortItems.POPULAR:
        onSetSortItem(SortItems.POPULAR);
        onChangePlaceCards(unSortedPlaceCards);
        break;

      case SortItems.PRICE_LOW_TO_HIGH:
        onSetSortItem(SortItems.PRICE_LOW_TO_HIGH);
        onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByPriceDown));
        break;

      case SortItems.PRICE_HIGH_TO_LOW:
        onSetSortItem(SortItems.PRICE_HIGH_TO_LOW);
        onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByPriceUp));
        break;

      case SortItems.TOP_RATED_FIRST:
        onSetSortItem(SortItems.TOP_RATED_FIRST);
        onChangePlaceCards(unSortedPlaceCards.slice().sort(sortByRate));
        break;
    }
  };

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={handleSortMenuOpenClick}
      onBlur={handleSortMenuFocusOut} >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" >
        {currentSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isToggleOn ? `places__options--opened` : ``}`}
        onClick={handleFilterClick}>
        <li className="places__option places__option--active" tabIndex="0" data-sort-item={SortItems.POPULAR}
        >Popular</li>
        <li className="places__option" tabIndex="0" data-sort-item={SortItems.PRICE_LOW_TO_HIGH}
        >Price: low to high</li>
        <li className="places__option" tabIndex="0" data-sort-item={SortItems.PRICE_HIGH_TO_LOW}
        >Price: high to low</li>
        <li className="places__option" tabIndex="0" data-sort-item={SortItems.TOP_RATED_FIRST}
        >Top rated first</li>
      </ul>
    </form>
  );
};

SortMenuItems.propTypes = {
  placeCards: placeCardsType,
  unSortedPlaceCards: placeCardsType,
  onChangePlaceCards: PropTypes.func.isRequired,
  onSetSortItem: PropTypes.func.isRequired,
  currentSortItem: PropTypes.string.isRequired,
};

const mapStateToProps = ({placeCards, unSortedPlaceCards, currentSortItem, initialSortItem}) => ({
  placeCards,
  unSortedPlaceCards,
  currentSortItem,
  initialSortItem
});

const mapDispatchToProps = (dispatch) => ({
  onChangePlaceCards(cards) {
    dispatch(ActionCreator.setPlaceCards(cards));
  },
  onSetSortItem(sortItem) {
    dispatch(ActionCreator.setSortItem(sortItem));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuItems);
