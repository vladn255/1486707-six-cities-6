import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action.js';

import {SortItems} from "../../const.js";
import {getCurrentSortItem} from '../../store/cards-data/selectors.js';

const SortMenuItems = ({currentSortItem, onSetSortItem}) => {
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
        break;

      case SortItems.PRICE_LOW_TO_HIGH:
        onSetSortItem(SortItems.PRICE_LOW_TO_HIGH);
        break;

      case SortItems.PRICE_HIGH_TO_LOW:
        onSetSortItem(SortItems.PRICE_HIGH_TO_LOW);
        break;

      case SortItems.TOP_RATED_FIRST:
        onSetSortItem(SortItems.TOP_RATED_FIRST);
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
  onSetSortItem: PropTypes.func.isRequired,
  currentSortItem: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentSortItem: getCurrentSortItem(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSetSortItem(sortItem) {
    dispatch(ActionCreator.setSortItem(sortItem));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuItems);
