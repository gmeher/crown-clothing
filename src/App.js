import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      setCurrentUser({
        ...userAuth
      })
      // setting currentuser to giant userauth so that our new layout can start loading while we are fetching 
      // user information using snapshot.

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }else{
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render = { () => 
              this.props.currentUser   ? (
                <Redirect to = '/' />
              ) : (
                <SignInAndSignUpPage /> 
              )
            } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser : selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
}) 
export default connect(mapStateToProps,mapDispatchToProps)(App); //connect(mapStateToProps,mapDispatchToProps)(the component)