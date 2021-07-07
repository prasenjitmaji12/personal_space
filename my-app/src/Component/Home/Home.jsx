import '../../App.css';
import React from 'react';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
            Home
            <button onClick={() => {this.props.addToCart(this.props.numberOfItems);}}>Add To Cart</button>
            <div>
              {this.props.numberOfItems}
            </div>
        </header>
      </div>
    );
  }
}

export default Home;
