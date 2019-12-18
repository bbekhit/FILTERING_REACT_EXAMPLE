import React from 'react'
import Type from './Types'
import Color from './Colors'
import Sizes from './Sizes'
import Prices from './Prices'

const Filters = props => {
	return (
		<div className='filters-container'>
			<Type />
			<Color />
			<Sizes />
			<Prices />
		</div>
	)
}

export default Filters
