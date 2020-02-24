import React from 'react';
import CustomButton from '../custom-button/custom-buton.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import toggleCartDropdown from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems, history, dispatch} ) => {

    return( 
    <div className="cart-dropdown">
        <div className="cart-items">
            {  
                cartItems.length ? cartItems.map( 
                    (cartItem) =>(
                        <CartItem key = { cartItem.id } item = {cartItem} />
                    )) : <span className="empty-message">Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick = {() => {
                history.push('/checkout')
                dispatch(toggleCartDropdown())
            }}>
            go to checkout
        </CustomButton>
    </div>
)}

const mapStateToProps = ( state ) => ({
    cartItems : selectCartItems( state )
})

export default withRouter(connect(mapStateToProps)(CartDropdown));