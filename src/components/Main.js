import React, {Component} from 'react';
import Map from '../components/Map.js'
import Section from '../components/Section.js'
class Main extends Component {

	render() {

		return(
			<main className="app-main">
        <Section/>
				<Map/>
      </main>
		)
	}
}

export default Main