import {
	SELECT_COLOR,
	SELECT_SIZE,
	SELECT_PRICE,
	SELECT_TYPES,
} from '../actions/types'

import { min, max } from '../../components/Filters/Prices'

const filterReducer = (
	state = {
		color: 'all',
		size: 'all',
		price: { min, max },
		types: ['t-shirt', 'polo', 'sweat-shirt', 'long-sleeve', 'jacket'],
	},
	action
) => {
	switch (action.type) {
		case SELECT_COLOR:
			return { ...state, color: action.payload }
		case SELECT_SIZE:
			return { ...state, size: action.payload }
		case SELECT_PRICE:
			return { ...state, price: action.payload }
		case SELECT_TYPES:
			return { ...state, types: action.payload }
		default:
			return state
	}
}

export default filterReducer
