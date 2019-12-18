import { FILTER } from '../actions/types'

import tShirts from '../../productsList/tShirts'
import poloShirts from '../../productsList/poloShirts'
import sweatShirts from '../../productsList/sweatShirts'
import longSleeves from '../../productsList/longSleeves'
import jackets from '../../productsList/jackets'

const initDisplayedShirts = tShirts.concat(
	poloShirts,
	sweatShirts,
	longSleeves,
	jackets
)
const tshirtReducer = (state = initDisplayedShirts, action) => {
	switch (action.type) {
		case FILTER:
			console.log(action.payload)
			return initDisplayedShirts
				.filter(
					e =>
						e.color.includes(action.payload.color) &&
						e.sizes.includes(action.payload.size) &&
						e.price >= action.payload.price.min &&
						e.price <= action.payload.price.max &&
						action.payload.types.includes(e.type)
				)
				.sort((a, b) => a.price - b.price)
		default:
			return state
	}
}

export default tshirtReducer
