const initialState = {
  numberOfItems: 0
};

const cartItems = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return {
            ...state,
            numberOfItems: action.value + 1
        };
      default:
        return state
    }
  }
  
  export default cartItems
  