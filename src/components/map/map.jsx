import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";

const Map = ({city, points}) => {

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const ZOOM = 12;

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    points.forEach(({title, city: {location: {latitude, longitude, zoom}}}) => {
      leaflet.marker({
        lat: latitude,
        lng: longitude,
        zoom,
        title
      },
      {
        icon
      })
      .addTo(mapRef.current)
      .bindPopup(title);
    });
  }, []);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef} ></div>
  );
};

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number.isRequired),
  points: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired})
    }),
    title: PropTypes.string.isRequired
  }))
};

export default Map;
