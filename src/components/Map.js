import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

  render(){

    const NeighborhoodMap =withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.5558, lng: -1.7797 } }
        defaultZoom = { 10 }
      >
      </GoogleMap>
   ));

    return(
      <div>
        <NeighborhoodMap
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    );
  }
};
export default Map;