import React, {Component} from 'react';
import HotelMap from '../components/Map.js'
import Section from '../components/Section.js'
import escapeRegExp from 'escape-string-regexp'
class Main extends Component {

	constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

handleChange = (event) => {
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

	render() {

		return(
			<main className="app-main">
				<Section 
					//hotelsArray={this.props.hotelsArray}
					handleChange={this.handleChange}
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