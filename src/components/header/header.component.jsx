import React from 'react';
import {connect} from 'react-redux';
import {selectShowCartDropdown} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';

import {HeaderContainer, OptionsContainer, LogoContainer, LinkOptionContainerStyles} from './header.styles'

const Header = ({ currentUser, showCartDropdown }) => {
    return(
        <HeaderContainer>
            <LogoContainer to = "/">

                <Logo className = "logo"/>
            </LogoContainer>


            <OptionsContainer>
                <LinkOptionContainerStyles to="/shop">
                    SHOP
                </LinkOptionContainerStyles>
                <LinkOptionContainerStyles to = "/contact">
                    CONTACT
                </LinkOptionContainerStyles>
                {
                    currentUser ? (
                        <LinkOptionContainerStyles as='div' onClick = {()=>auth.signOut()}>
                            SIGN OUT
                        </LinkOptionContainerStyles>
                    ) : ( 
                        <LinkOptionContainerStyles to="/signin"> SIGN IN</LinkOptionContainerStyles>
                    )
                    
                }

                <CartIcon />

            </OptionsContainer>
            {    
                showCartDropdown ? (
                    <CartDropdown />
                ) : null
                   
            }

        </HeaderContainer>
    )
}


const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    showCartDropdown : selectShowCartDropdown
})

//using createStructuredSelector just to shy away from repetative use of selectCurrentUser(state).


export default connect(mapStateToProps)(Header);
