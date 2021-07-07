import { connect } from 'react-redux'
import About from './About'

const mapStateToProps = (state) => ({
  numberOfItems: state.cartItems.numberOfItems
})

const mapDispatchToProps = dispatch => ({ 
});

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About)

export default AboutContainer
