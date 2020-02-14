import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from './pages/homepage.component';

const Shop = (props) => {
 
 console.log(props)
 return ( <div>

   <Link to= {`${props.match.url}/zero`}>go to zero </Link>
    <h1> Shop List Page </h1>
  </div> );
}


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
      <Switch>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path = "/shop/:shopCategory" component = {ShopCategory}/>
      </Switch>
      
    </div>
  );
}

export default App;
