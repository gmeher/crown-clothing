import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Redirect, Route, withRouter} from 'react-router-dom'


const StripeCheckoutButton = ({price, history}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_7DRSdvuZHlDVbYsUG4dGgo5u00SETdJTTO';
    const onToken = (token) => {
        console.log(token)
        history.push('/')
    }
    return(
        <StripeCheckout 
            name = 'crown-clothing'
            description = {`your total price is $${price}`}
            image = 'https://svgshare.com/CUz.svg'
            label = 'Check Out'
            panelLabel = 'Pay Now'
            amount = { priceForStripe }
            currency="USD"
            stripeKey = { publishableKey }
            shippingAddress
            billingAddress = {false}
            token = {onToken}
        
        >
        
        </StripeCheckout>
        
    )
}

export default withRouter(StripeCheckoutButton);
