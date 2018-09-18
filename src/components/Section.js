import React, {Component} from 'react';
import Modal from './Modal';


class Section extends Component {

	constructor(props) {
		super(props);
//		this.state = { streetViewURL: '' }
	}

	
/*	toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }*/
	
/*	state = {
		displayedHotelsArray: []
	}

componentDidUpdate () {
		if (this.props.selectedHotels.length > 0) {
			this.setState({displayedHotelsArray: this.props.selectedHotels},
				() => {console.log('displayed hotels are '+ this.state.displayedHotelsArray)
			})
		} else {
			this.setState({displayedHotelsArray: this.props.hotelsArray},
				() => {console.log('displayed hotels are '+ this.state.displayedHotelsArray)
			})
		}
	}*/

	render() {

		console.log("onChange " + this.props.handleChange)
		console.log("section showModal is " + this.props.showModal)
		
	/*	if (this.props.showModal) {
			let streetViewURLvar
			let lat = this.props.selectedHotels[0].location.lat
			let lng = this.props.selectedHotels[0].location.lng
			console.log("lat= " + lat + " lng= " + lng)
			streetViewURLvar = helperFunctions.getStreetView(lat, lng)
		//	.then(response => response.url)
		console.log("streetViewURLvar= " + streetViewURLvar)
		this.setState({streetViewURL: streetViewURLvar},
			() => {console.log('ss streetViewURL ' + this.state.streetViewURL)
		})
		//	.catch(error => {
		//		console.log('Error while getting photo', error)})
		}*/
		
		return(
			<section className="app-section">
        <h2 className="section-heading">Available hotels</h2>
				<input	id="search-filter-text" 
					type="text" 
					role="textbox"
					aria-label = "Enter a hotel name"
					placeholder = "Enter a hotel name"
					onChange={(event) => this.props.handleChange(event)}/>
				<ol className="hotel-list">
					{
						//this.props.hotelsArray
						this.props.selectedHotels
							.map(hotel => (
								<li key={hotel.id}
								value={hotel.name}
								onClick={this.props.onItemClickHandler}>
										{hotel.name.replace("Swindon","")}
								</li>
							))
					}
				</ol>
				<Modal 
					address={this.props.selectedHotels[0].location.address}
					city={this.props.selectedHotels[0].location.city}
					showModal={this.props.showModal}
          closeModal={this.props.closeModal}
					streetViewURL={this.props.streetViewURL}>
        </Modal>
      </section>
		)
	}
}

export default Section