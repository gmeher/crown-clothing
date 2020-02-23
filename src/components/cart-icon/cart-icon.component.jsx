import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import toggleCartDropdown from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdown, itemsCount}) => (
    <div className="cart-icon" onClick = {toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"> {itemsCount} </span>
    </div>
)

const mapStateToProps = (state) => ({
   itemsCount: selectCartItemsCount (state)
})

const mapDispatchToProps = (dispatch) => ({
toggleCartDropdown : () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);