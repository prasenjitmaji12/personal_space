export const addToCart = (value) => dispatch => 
    dispatch({
      type: 'ADD',
      value
    });