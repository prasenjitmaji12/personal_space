import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Cart from '../Cart/Cart';

const MasterHeader = (props) => {
    const history = useHistory();
    if(props && props.getHistory){
        props.getHistory(history); 
    }
    return (
        <Navbar className="custom-nav-style" expand="lg">
            <Navbar.Brand href="/home">MyCartShopping</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey="/home"
                        onSelect={(selectedKey) => {history.push(selectedKey); console.log(props)}}
                    className="mr-auto">
                    <Nav.Link eventKey="/home">Home</Nav.Link>
                    <Nav.Link eventKey="/app">App</Nav.Link>
                    <Nav.Link eventKey="/about">About</Nav.Link>                    
                </Nav>                
                <Cart numberOfItems={props.store.getState().cartItems.numberOfItems} history={history}/>
            </Navbar.Collapse>
            </Navbar>        
    )
}

export default MasterHeader;