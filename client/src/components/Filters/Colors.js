import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/allActions'

const Colors = props => {
	const [selectedColor, setSelectedColor] = useState('')
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
	const {
		filters: { size, price, types },
		selectColor,
		filterTshirts,
	} = props

	const renderColors = () =>
		colors.map((color, i) => (
			<div
				key={i}
				className={`color ${selectedColor === color ? 'selected-color' : ''}`}
				onClick={() => {
					if (color === selectedColor) {
						setSelectedColor('all')
						selectColor('all')
						filterTshirts('all', size, types)
						return
					}
					setSelectedColor(color)
					selectColor(color)
					filterTshirts(color, size, price, types)
				}}
			/>
		))

	return (
		<div className='filter-section colors-section bottom-border'>
			<h4>Color:</h4>
			<div className='colors-wrapper'>{renderColors()}</div>
		</div>
	)
}

const mapStateToProps = ({ filters }) => ({
	filters,
})

export default connect(mapStateToProps, actions)(Colors)
