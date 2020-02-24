import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collectionpage/collectionpage.component';
import './shoppage.styles.scss';



const ShopPage = ({match}) =>( 
    <div className = "shop-page">
        <Route  exact path = { `${match.url}` } component = {CollectionOverview} />
        <Route exact path = { `${match.url}/:categoryId` } component = {CollectionPage} /> 
    </div>
);
    


 
export default ShopPage;