
import React from 'react';
import Cart from '../Cart/Cart';

class About extends React.Component{
  render(){
  return (
    <div >
      <header >                       
      <Cart numberOfItems={this.props.numberOfItems} history={this.props.history}/>
      </header>
    </div>
  );
}}

export default About;
