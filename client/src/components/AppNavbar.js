import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container 
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import Profile from './Profile'


class AppNavbar extends Component {

    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
        <div>
            <Navbar color = "dark" dark expand = "sm" className = "md-5">
                <Container>
                    <NavbarBrand>Fuel Rate Web Portal</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle} />
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                               <RegisterModal />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;