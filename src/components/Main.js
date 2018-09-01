import React, {Component} from 'react';
import Map from '../components/Map.js'
import Section from '../components/Section.js'
class Main extends Component {

//hotelsArray = this.props.hotelsArray;

	render() {

		return(
			<main className="app-main">
				<Section 
					hotelsArray={this.props.hotelsArray}
				/>
				<Map
					hotelsArray={this.props.hotelsArray}
				/>
      </main>
		)
	}
}

export default Main