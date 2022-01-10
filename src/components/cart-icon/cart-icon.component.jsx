import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

// Functional Component
const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
    null, 
    mapDispatchToProps
)(CartIcon);