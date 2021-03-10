import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';

import {cityType} from "../../types.js";

const ZOOM = 13;

const Map = ({city, placeCards, activeCardId}) => {
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
        icon: getIcon(id, activeCardId)
      })
      .addTo(mapRef.current)
      .bindPopup(title);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [city, activeCardId]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef} ></div>
  );
};

Map.propTypes = {
  city: cityType,
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired})
    }),
    title: PropTypes.string.isRequired
  })),
  activeCardId: PropTypes.number.isRequired
};

const mapStateToProps = ({selectedCity, activeCardId, unSortedPlaceCards}) => ({
  city: selectedCity,
  activeCardId,
  placeCards: unSortedPlaceCards
});

export {Map};
export default connect(mapStateToProps)(Map);
