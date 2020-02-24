import CartActionTypes from './cart.types';
import { addItemToCart, removeItemfromCart } from './cart.utils';


const INITIAL_STATE = {
    showCartDropdown : false,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN : 
            return {
                ...state,
                showCartDropdown : !state.showCartDropdown,
            };
        case CartActionTypes.ADD_ITEM :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART : 
            return{
                ...state,
                cartItems : state.cartItems.filter( (cartItem) => cartItem.id !== action.payload.id )
            }
        case CartActionTypes.REMOVE_ITEM : 
            return {
                ...state,
                cartItems : removeItemfromCart(state.cartItems, action.payload)
            }
        default : 
            return state;
    }
}

export default cartReducer;