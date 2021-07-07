import { combineReducers } from 'redux'
import cartItems from './Component/Home/Reducer/reducer';

const rootReducer = combineReducers({
  cartItems,
})

export default rootReducer
