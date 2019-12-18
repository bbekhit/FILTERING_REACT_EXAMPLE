import {
	SELECT_COLOR,
	SELECT_SIZE,
	SELECT_PRICE,
	SELECT_TYPES,
	FILTER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SHOW_CART,
} from './types'

export const selectColor = color => dispatch =>
	dispatch({
		type: SELECT_COLOR,
		payload: color,
	})

export const selectSize = size => ({
	type: SELECT_SIZE,
	payload: size,
})

export const selectPrice = price => ({
	type: SELECT_PRICE,
	payload: price,
})

export const selectTypes = types => ({
	type: SELECT_TYPES,
	payload: types,
})

export const filterTshirts = (color, size, price, types) => dispatch =>
	dispatch({
		type: FILTER,
		payload: { color, size, price, types },
	})

export const addToCart = item => ({
	type: ADD_TO_CART,
	payload: item,
})

export const removeFromCart = item => ({
	type: REMOVE_FROM_CART,
	payload: item,
})

export const showCart = () => ({
	type: SHOW_CART,
})
