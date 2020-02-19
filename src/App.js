import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';




 const ShopCategory = (props) => {
   console.log(props);  
   return ( <div>
     <button onClick = { ()=>{ props.history.push('/topics')}}> Topic List </button>
     <h1> {`Best Place to Shop: ${props.match.params.shopCategory}`} </h1>
   </div>)
 }


function App() {
  return (
    <div>

            <Header/>

      <Switch>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path = "/signin" component = {SignInAndSignUpPage} />
            <Route path = "/shop/:shopCategory" component = {ShopCategory}/>
      </Switch>
      
    </div>
  );
}

export default App;
