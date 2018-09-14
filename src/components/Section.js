import React, {Component} from 'react';
import Modal from './Modal';

class Section extends Component {

	constructor(props) {
		super(props);
		//this.state = { isOpen: false };
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
										{hotel.name}
								</li>
							))
					}
				</ol>
				<Modal 
					showModal={this.props.showModal}
          closeModal={this.props.closeModal}>
        </Modal>
      </section>
		)
	}
}

export default Section