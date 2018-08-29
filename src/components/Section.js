import React, {Component} from 'react';

class Section extends Component {
	
	render() {
		
		return(
			<section className="app-section">
        <h2 className="section-heading">Available hotels</h2>
				<ol className="hotel-list">
					{
						this.props.hotelsArray
							.map(hotel => (
								<li key={hotel.id}>
										{hotel.name}
								</li>
							))
					}
				</ol>
      </section>
		)
	}
}

export default Section