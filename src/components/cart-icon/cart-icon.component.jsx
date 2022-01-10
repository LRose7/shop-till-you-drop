import React from 'react';
import { ShoppingCart } from '@material-ui/icons';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

// Functional Component
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingCart className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

// a function used to provide the action creators as props to your component
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// mapStateToProps is a function you use to provide the store data to your component
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);