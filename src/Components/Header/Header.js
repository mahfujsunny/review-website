import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
             <div className="div-bg">
                 <Navbar></Navbar>
                 <div className="info">
                     <h1>Bancharampur Polytecnic Institute</h1>
                     <h2>Bancharampur , Brahmanbariya</h2>
                     <h5>EST : 2012</h5>
                 </div>
            </div>
    );
};

export default Header;