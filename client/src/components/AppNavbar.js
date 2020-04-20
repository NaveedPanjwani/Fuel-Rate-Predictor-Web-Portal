import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';

import AuthService from '../Services/AuthService';
import { AuthContext } from '../context/AuthContext';


const AppNavbar = props => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

const {isAuthenticated, setIsAuthenticated,setUser} = useContext(AuthContext);

const onClickLogoutHandler = ()=>{
    AuthService.logout().then(data=>{
        if(data.success){
            setUser(data.user);
            setIsAuthenticated(false);
        }
    });
}

const unauthenticatedNavBar = () =>{
    return(
            <>     
            {/* <Link to= "/login">
                <li className= "nav-item nav-link navbar-brand">Login</li>
            </Link> */}

            <NavItem>
            <RegisterModal />
            </NavItem>     
            </>
    )
}

const authenticatedNavBar = () => {
    return(
            <>
            <Link to= "/forum">
                <li className= "nav-item nav-link navbar-brand">Quote Form</li>
            </Link>
            <Link to= "/profile">
                <li className= "nav-item nav-link navbar-brand">Profile</li>
            </Link>
            <Link to= "/history">
                <li className= "nav-item nav-link navbar-brand">History</li>
            </Link>

            <button type="button" className="btn btn-outline-danger" 
            onClick={onClickLogoutHandler} block>Logout</button>
            </>
    )
}

return(
    <Navbar className ="navbar navbar-expand-md navbar-dark bg-dark">    
        <NavbarBrand>Fuel Rate Web Portal</NavbarBrand>
            <NavbarToggler onClick= {toggle} />
                <Collapse isOpen = {isOpen} navbar> 
                    <Nav className = "navbar-nav ml-auto">
                        { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                    </Nav>
                </Collapse>
    </Navbar>
  )
}

export default AppNavbar;
