import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>Portfolio site</header>
            <NavLink to="/" exact={ true }>Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </div>
    )
}
export default Header;