import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

class HotelMarker extends React.Component {

  state = {
    infoBoxOpened: false,
    clickedMarker: null
  }

  toggleOpen = () => {
    console.log("marker clicked is " + this.props.label)
    if (this.state.infoBoxOpened){
      this.setState({infoBoxOpened: false})
      this.setState({clickedMarker: null})
      console.log("info box shut")
    } else{
      this.setState({infoBoxOpened: true})
      this.setState({clickedMarker: this.props.label})
      console.log("info box opened")
    }
  }

  render(){
    console.log("infoBoxOpened " + this.state.infoBoxOpened + " clickedMarker " + this.state.clickedMarker)
    return(
        <Marker
          onClick={this.toggleOpen}
          position={this.props.position}
          map={this.props.map}
        >
        { this.state.infoBoxOpened && this.state.clickedMarker === this.props.label ?
          <InfoWindow maxWidth={800} onCloseClick={this.toggleOpen}>
            <div>
              info InfoWindow
            </div>
          </InfoWindow> : null
        }
        </Marker>
    );
  }
}

export default HotelMarker