import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_CART } from '../actions/types'

const initialState = {
	showCart: false,
	cartItems: [],
}

const cart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, cartItems: [...state.cartItems, action.payload] }
		case REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(e => e !== action.payload),
			}
		case SHOW_CART:
			return { ...state, showCart: !state.showCart }
		default:
			return state
	}
}

export default cart
