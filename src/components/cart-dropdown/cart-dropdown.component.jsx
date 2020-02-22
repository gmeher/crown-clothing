import React from 'react';
import CustomButton from '../custom-button/custom-buton.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton>
            go to checkout
        </CustomButton>
    </div>
)


export default CartDropdown;