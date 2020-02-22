import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    showCartDropdown : false
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN : 
            return {
                ...state,
                showCartDropdown : !state.showCartDropdown,
            };
        default : 
            return state;
    }
}

export default cartReducer;