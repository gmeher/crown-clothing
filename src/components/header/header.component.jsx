import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectShowCartDropdown} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({ currentUser, showCartDropdown }) => {
    return(
        <div className="header">
            <Link className="logo-container" to = "/">

                <Logo className = "logo"/>
            </Link>


            <div className="options">
                <Link className = "option" to="/shop">
                    SHOP
                </Link>
                <Link className = "option" to = "/contact">
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className="option" onClick = {()=>auth.signOut()}>
                            SIGN OUT
                        </div>
                    ) : ( 
                        <Link className="option" to="/signin"> SIGN IN</Link>
                    )
                    
                }

                <CartIcon />

            </div>
            {    
                showCartDropdown ? (
                    <CartDropdown />
                ) : null
                   
            }

        </div>
    )
}


const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    showCartDropdown : selectShowCartDropdown
})

//using createStructuredSelector just to shy away from repetative use of selectCurrentUser(state).


export default connect(mapStateToProps)(Header);
