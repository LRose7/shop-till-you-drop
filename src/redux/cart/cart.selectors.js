import { createSelector } from 'reselect';

// a function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
    )
);