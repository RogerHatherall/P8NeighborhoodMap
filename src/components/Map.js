/*global google*/
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import HotelMarker from "./HotelMarker"


class Map extends Component {

  render() {

    let markers;
    if (this.props.venues !== null) {
      //markers = this.props.hotelsArray.map( (marker, i) => {
      markers = this.props.selectedHotels.map( (marker, i) => {
      console.log(marker.id);
        return (
          <HotelMarker
            key={i}
            label={marker.id}
            name={marker.name.replace("Swindon","")}
            address={marker.location.address}
            city={marker.location.city}
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            map={{NeighborhoodMap}}
            animation = {this.props.showModal? google.maps.Animation.BOUNCE : google.maps.Animation.DROP }
          />
        )
      })
    } else {
      console.log("no venues");
    }
  
const NeighborhoodMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 51.5558, lng: -1.7797 } }
        defaultZoom = { 11 }
      >
      	{markers}   

      </GoogleMap>
      
   ));

   

    return(
      <div className = "google-map">
        <NeighborhoodMap
        //  containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
        //  mapElement={ <div style={{ height: `100%` }} /> }
        containerElement={ <div className = "container-element"/> }
        mapElement={ <div className = "map-element"/> }
        visable
      //  markers={markers}
        
        />
      </div>
      
    );
  }
};
export default Map;