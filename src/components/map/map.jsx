import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';

import {cityType, placeCardType, placeCardsType} from "../../types.js";
import {getActiveCard} from '../../store/cards-data/selectors.js';

const ZOOM = 13;

const Map = ({city, placeCards, activeCard}) => {
  const {location} = city;

  const getIcon = (id, activePointId) => {
    return (
      leaflet.icon({
        iconUrl: ((id === activePointId) ? `img/pin-active.svg` : `img/pin.svg`),
        iconSize: [30, 30]
      })
    );
  };

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: location,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(location, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    placeCards.forEach(({title, location: {latitude, longitude, zoom}, id}) => {

      leaflet.marker({
        lat: latitude,
        lng: longitude,
        zoom,
        title
      },
      {
        icon: getIcon(id, activeCard.id)
      })
      .addTo(mapRef.current)
      .bindPopup(title);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [city, activeCard.id, placeCards]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef} ></div>
  );
};

Map.propTypes = {
  city: cityType,
  placeCards: placeCardsType,
  activeCard: placeCardType
};

const mapStateToProps = (state) => ({
  activeCard: getActiveCard(state)
});

export {Map};
export default connect(mapStateToProps)(Map);
