import React, {Component} from 'react';
import HotelMap from '../components/Map.js'
import Section from '../components/Section.js'
import escapeRegExp from 'escape-string-regexp'
import * as helperFunctions from '../helperFunctions';
class Main extends Component {

	constructor(props) {
    super(props);
		this.handleChange = this.handleChange.bind(this);
		this.onItemClickHandler = this.onItemClickHandler.bind(this)
		this.closeModal = this.closeModal.bind(this);
  }

//hotelsArray = this.props.hotelsArray;
//const match = new RegExp(escapeRegExp(query), 'i')
//showingContacts = contacts.filter((contact) => match.test(contact.name))
state = {
	selectedHotels: [],
	showModal: false,
	streetViewURL: ''
}

componentWillMount () {
	this.setState({selectedHotels: this.props.hotelsArray})
}

/*handleChange = (event) => {
	let match = new RegExp(escapeRegExp(event.target.value.trim()), 'i')
	console.log("match is " + match)
	let matchingHotels = this.props.hotelsArray.filter((hotel) => match.test(hotel.name))
	console.log("matchingHotels is " + JSON.stringify(matchingHotels))

	if (matchingHotels.length > 0) {
		this.setState({selectedHotels: matchingHotels},
			() => {console.log('selected hotels are '+ this.state.selectedHotels)
		})
	} else {
		this.setState({selectedHotels: null},
			//() => {console.log('selected hotels are '+ this.state.selectedHotels)
			() => {console.log('selected hotels are '+ this.props.hotelsArray)
		})
	}
}

onItemClickHandler = (event) => {
	console.log("test");
	console.log(event.target.innerText);
	//this.handleChange(event.target)
}*/

handleChange = (event) => {
	let match = new RegExp(escapeRegExp(event.target.value.trim()), 'i')
	console.log("match is " + match)
	let matchingHotels = this.props.hotelsArray.filter((hotel) => match.test(hotel.name))
	console.log("matchingHotels is " + JSON.stringify(matchingHotels))
	this.setSelectedHotels(matchingHotels)
}

onItemClickHandler = (event) => {
	console.log("test")
	console.log(event.target.innerText)
	//let clickedHotel = [] 
	let match = new RegExp(escapeRegExp(event.target.innerText.trim()), 'i')
	let clickedHotel = this.props.hotelsArray.filter((hotel) => match.test(hotel.name))
	//clickedHotel.push(event.target.innerText)
	//this.handleChange(event.target)
	console.log("clickedHotel is " + clickedHotel)
	this.setSelectedHotels(clickedHotel)
}

/*setSelectedHotels = (hotels) => {
	console.log("hotels in setSelectedHotels are " + hotels)
	if (hotels.length > 0) {
		this.setState({selectedHotels: hotels,
									 showModal: true},
			() => {console.log('selected hotels are '+ this.state.selectedHotels)
		})
	} else {
		this.setState({selectedHotels: null,
									 showModal: false},
			//() => {console.log('selected hotels are '+ this.state.selectedHotels)
			() => {console.log('selected hotels are '+ this.props.hotelsArray)
		})
	}
}*/

setSelectedHotels = (hotels) => {
	console.log("hotels in setSelectedHotels are " + hotels)
	switch (hotels.length) {
		case 0: //none selected: show all of them without modal window
			this.setState({selectedHotels: this.props.hotelsArray,
										showModal: false},
				() => {console.log('selected hotels are '+ this.state.selectedHotels.name)
			})
			break;	
		case 1: //one selected: show it with modal window
			this.setState({selectedHotels: hotels,
										showModal: true},
				() => {console.log('selected hotel is '+ this.state.selectedHotels[0].name)
							this.getStreetViewURL()})
			break;
		default: //more than one selected: show them without modal window 
			this.setState({selectedHotels: hotels,
										showModal: false},
				//() => {console.log('selected hotels are '+ this.state.selectedHotels)
				() => {console.log('selected hotels are '+ this.state.selectedHotels.name)
			})
	}
}

getStreetViewURL = () => {
	let streetViewURLvar
	let lat = this.state.selectedHotels[0].location.lat
	let lng = this.state.selectedHotels[0].location.lng
	console.log("lat= " + lat + " lng= " + lng)
	streetViewURLvar = helperFunctions.getStreetView(lat, lng)
	console.log("streetViewURLvar= " + streetViewURLvar)
	this.setState({streetViewURL: streetViewURLvar},
		() => {console.log('ss streetViewURL ' + this.state.streetViewURL)
	})
//	.catch(error => {
//			console.log('Error while getting photo', error)})
}

closeModal = () => {
	console.log("button clicked")
	this.setState({selectedHotels: this.props.hotelsArray,
								 showModal: false})
}

	render() {
		console.log("calling render in main " + this.state.selectedHotels)
		return(
			<main className="app-main">
				<Section 
					//hotelsArray={this.props.hotelsArray}
					handleChange={this.handleChange}
					onItemClickHandler={this.onItemClickHandler}
					selectedHotels={this.state.selectedHotels}
					showModal={this.state.showModal}
					closeModal={this.closeModal}
					streetViewURL={this.state.streetViewURL}
				/>
				<HotelMap
					//hotelsArray={this.props.hotelsArray}
					selectedHotels={this.state.selectedHotels}
					showModal={this.state.showModal}
				/>
      </main>
		)
	}
}

export default Main