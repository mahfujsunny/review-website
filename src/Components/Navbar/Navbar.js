import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="menubar">
        
            <Link to="/home" className="nav-menu fw-bold fs-5 p-4 ">Home</Link>
            <Link to="/about" className="nav-menu fw-bold fs-5 p-4 ">About</Link>
            <Link to="/services" className="nav-menu fw-bold fs-5 p-4 ">Services</Link>
            <Link to="/courses" className="nav-menu fw-bold fs-5 p-4 ">Courses</Link>

        </div>
    );
};

export default Navbar;