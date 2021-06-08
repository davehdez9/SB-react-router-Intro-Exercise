import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/snickerBar">Snicker Bar</NavLink>
            <NavLink exact to="/cliffBar">Cliff Bar</NavLink>
            <NavLink exact to="/soda">Soda</NavLink>
        </nav>
    )
}

export default NavBar