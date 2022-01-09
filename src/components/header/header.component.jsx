import React from 'react';
import  Logo from '../../assets/crown.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';


const Header = ({ currentUser }) => {
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
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);