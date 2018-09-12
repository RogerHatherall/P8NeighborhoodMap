import React, {Component} from 'react';
import HotelMap from '../components/Map.js'
import Section from '../components/Section.js'
import escapeRegExp from 'escape-string-regexp'
class Main extends Component {

	constructor(props) {
    super(props);
		this.handleChange = this.handleChange.bind(this);
		this.onItemClickHandler = this.onItemClickHandler.bind(this)
  }

//hotelsArray = this.props.hotelsArray;
//const match = new RegExp(escapeRegExp(query), 'i')
//showingContacts = contacts.filter((contact) => match.test(contact.name))
state = {
	selectedHotels: []
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

setSelectedHotels = (hotels) => {
	console.log("hotels in setSelectedHotels are " + hotels)
	if (hotels.length > 0) {
		this.setState({selectedHotels: hotels},
			() => {console.log('selected hotels are '+ this.state.selectedHotels)
		})
	} else {
		this.setState({selectedHotels: null},
			//() => {console.log('selected hotels are '+ this.state.selectedHotels)
			() => {console.log('selected hotels are '+ this.props.hotelsArray)
		})
	}
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

				/>
				<HotelMap
					//hotelsArray={this.props.hotelsArray}
					selectedHotels={this.state.selectedHotels}
				/>
      </main>
		)
	}
}

export default Main