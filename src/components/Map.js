import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

  render(){

    const NeighborhoodMap =withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.5558, lng: -1.7797 } }
        defaultZoom = { 11 }
      >
      </GoogleMap>
   ));

    return(
      <div className = "google-map">
        <NeighborhoodMap
        //  containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
        //  mapElement={ <div style={{ height: `100%` }} /> }
        containerElement={ <div className = "container-element"/> }
        mapElement={ <div className = "map-element"/> }
        />
      </div>
    );
  }
};
export default Map;