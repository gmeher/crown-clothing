import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth} from './firebase/firebase.utils';




 const ShopCategory = (props) => {
   console.log(props);  
   return ( <div>
     <button onClick = { ()=>{ props.history.push('/topics')}}> Topic List </button>
     <h1> {`Best Place to Shop: ${props.match.params.shopCategory}`} </h1>
   </div>)
 }


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){

   
    return (

      
      <div>

              <Header currentUser = {this.state.currentUser} />

        <Switch>

              <Route exact path="/" component={HomePage}/>
              <Route exact path="/shop" component={ShopPage}/>
              <Route exact path = "/signin" component = {SignInAndSignUpPage} />
              <Route path = "/shop/:shopCategory" component = {ShopCategory}/>
        </Switch>
        
      </div>
    )
  }
}



export default App;
