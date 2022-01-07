import React from 'react';
import  Logo from '../../assets/crown.jpg';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <img src={ Logo } className="logo" alt="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;