import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/allActions'

const Type = props => {
	const { filterTshirts, filters } = props
	const [selectedTypes, setSelectedTypes] = useState(filters.types)
	const types = ['t-shirt', 'polo', 'long-sleeve', 'sweat-shirt', 'jacket']

	useEffect(() => {
		filterTshirts(filters.color, filters.size, filters.price, selectedTypes)
	}, [selectedTypes, filters, filterTshirts])

	const renderTypes = () =>
		types.map((type, i) => (
			<label key={i}>
				<input
					type='checkbox'
					name={type}
					id={type}
					checked={selectedTypes.includes(type)}
					onChange={() => {
						if (!selectedTypes.includes(type)) {
							setSelectedTypes([...selectedTypes, type])
						} else {
							setSelectedTypes([...selectedTypes.filter(e => e !== type)])
						}
					}}
				/>
				&nbsp;{type.charAt(0).toUpperCase() + type.slice(1)}
			</label>
		))

	return (
		<div className='filter-section types-section bottom-border'>
			<h4>Type:</h4>
			<div className='types-wrapper'>{renderTypes()}</div>
		</div>
	)
}

const mapStateToProps = ({ filters }) => ({
	filters,
})

export default connect(mapStateToProps, actions)(Type)
