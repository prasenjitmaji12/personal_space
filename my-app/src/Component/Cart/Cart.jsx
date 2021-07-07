import React from 'react';
import cartLogo from './cartLogo.svg';
import './cart.css'

class Home extends React.Component {    
    render(){
        return (
            <div>
                <button className='cartButton' onClick={() => this.props.history.push('/cart')}>
                    <img src={cartLogo} alt="logo" />
                    <b>  Cart</b>
                    <b className='cartItems'> {this.props.numberOfItems}</b>
                </button>
            </div>
        );
    }
}

export default Home;
