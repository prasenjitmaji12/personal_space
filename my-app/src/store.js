import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 

// let preloadedState
// const persistedAddNameString = localStorage.getItem('addName')

// if (persistedAddNameString) {
//   preloadedState = {
//     addName: JSON.parse(persistedAddNameString)
//   }
// }

const loggerMiddleware = storeAPI => next => action => {
    let result = next(action);
    return result;
}
const customMiddleware = [thunk, loggerMiddleware]
const composedEnhancer = composeWithDevTools(
    applyMiddleware(...customMiddleware)
)
  

const store = createStore(rootReducer,composedEnhancer);

export default store;