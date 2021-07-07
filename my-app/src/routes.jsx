import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import React from 'react';
import App from './Component/App';
import AboutContainer from './Component/About/Container';
import HomeContainer from './Component/Home/Modules/Container';
import CartListContainer from "./Component/Cart/Container";
import MasterHeader from "./Component/MasterHeader/MasterHeader";

class Routes extends React.Component{ 
    history = {};
    forceUpdateComponent = () => {};
    getHistory = (args) => {
        this.history = args;
    }
    render(){
        return (
            <Router>
                <MasterHeader {...this.props} getHistory={this.getHistory} forceUpdate={this.forceUpdate}/>
                <AboutContainer {...this.props}/>
                <Switch>
                    <Route exact path="/" render={props => 
                        <HomeContainer {...props} history={this.history}/>}/>
                    <Route exact path="/home" render={props => 
                        <HomeContainer {...props} history={this.history}/>}/>
                    {/* <Route path="/about" render={props => <About {...props} history={this.history}/>}/> */}
                    <Route path="/app" render={props => <App {...props} history={this.history}/>}/>
                    <Route path="/cart" render={props => <CartListContainer {...props} history={this.history}/>}/>
                </Switch>
            </Router>
          );
        }
}

export default Routes;