import { connect } from 'react-redux'
import { addToCart } from '../Action/action'
import Home from '../Home'

const mapStateToProps = (state) => ({
  numberOfItems: state.cartItems.numberOfItems
})

const mapDispatchToProps = dispatch => ({ 
  addToCart: (value) => dispatch(addToCart(value))
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
