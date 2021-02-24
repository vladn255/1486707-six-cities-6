import React, {useEffect} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

const Map = ({city, points}) => {

  const icon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  const zoom = 12;

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {

      leaflet.marker({
        lat: point.latitude,
        lng: point.longitude,
        zoom: point.zoom
      },
      {
        icon
      })
      .addTo(map);

    });
  }, []);

  return (
    <div id="map"></div>
  );
};

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number.isRequired),
  points: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }))
};

export default Map;
