import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartTotal, selectCartItems} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/checkout/checkout.component';
import './checkoutpage.styles.scss';
const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>yarn
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem => <CheckoutItem cartItem = {cartItem} />)
    }
    <div className='total'>TOTAL: ${total}</div>
    <div className="test-warning">
      Please Use following card info for test
      5555 5555 5555 4444  exp:- 01/25  CVV:- 555
    </div>
    <div className = 'checkout-button'> <StripeCheckoutButton price = {total} /> </div>
  </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartTotal,
})


export default connect(mapStateToProps)(CheckoutPage);