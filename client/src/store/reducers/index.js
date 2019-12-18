import { combineReducers } from 'redux'
import tshirtReducer from './tshirtReducer'
import cartReducer from './cartReducer'
import filterReducer from './filterReducer'

export default combineReducers({
	tshirt: tshirtReducer,
	cart: cartReducer,
	filters: filterReducer,
})
