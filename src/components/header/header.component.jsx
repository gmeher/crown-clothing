import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
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


const mapStateToProps = ({ user: {currentUser}, cart: {showCartDropdown} }) => ({
    currentUser,
    showCartDropdown
})



export default connect(mapStateToProps)(Header);
