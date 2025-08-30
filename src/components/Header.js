import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import OhschistLogo from '../app/assets/img/Ohschist_logo_2016.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={OhschistLogo} alt='OhSchist! logo' className='float-start' />
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/gallery'>
                                <i className='fas fa-hand-rock fa-lg' /> Rock Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/quiz'>
                                <i className='fa-solid fa-face-grin-tongue-squint fa-lg' /> Rock Quiz
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}

export default Header;