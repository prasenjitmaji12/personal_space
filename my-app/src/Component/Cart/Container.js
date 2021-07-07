import { connect } from 'react-redux'
import CartList from './CartList'

const mapStateToProps = (state) => ({
  numberOfItems: state.cartItems.numberOfItems
})

const mapDispatchToProps = dispatch => ({ 
});

const CartListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)

export default CartListContainer
