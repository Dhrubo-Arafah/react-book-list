import React, { useState } from 'react'
import { Navbar, NavbarBrand, Nav, Collapse, NavbarToggler, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const[isOpen, setIsOpen]=useState(false)
    return (
        <Navbar dark color="dark" expand="sm">
            <div className="container">
                <NavbarBrand>Brand</NavbarBrand>
                <NavbarToggler onClick={()=>setIsOpen(!isOpen)}/>
                <Collapse navbar isOpen={isOpen}>
                    <Nav navbar>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/add-book">Add Book</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation
