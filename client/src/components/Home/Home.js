import React from 'react'
import Feature from '../Feature/Feature'
import TshirtList from '../Tshirt/TshirtList'
import Filters from '../Filters/Filters'

const Home = props => {
	return (
		<div>
			<Feature />
			<section id='section-item-finder' style={{ padding: '1rem' }}>
				<Filters />
				<TshirtList />
			</section>
		</div>
	)
}

export default Home
