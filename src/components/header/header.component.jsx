import React from 'react';
import  Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';


const Header = ({ currentUser, hidden }) => {
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
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    )
}

// createStructuredSelector automatically passes top level state from our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);