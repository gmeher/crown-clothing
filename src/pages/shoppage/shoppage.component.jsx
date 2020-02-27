import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collectionpage/collectionpage.component';
import './shoppage.styles.scss';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {mapShopCollections} from '../../redux/shop/shop.action';



class ShopPage extends React.Component {

    unSubScribeFromLoadingCollections = null;
    componentDidMount(){
        const collectionsRef = firestore.collection('collections');
        this.unSubScribeFromLoadingCollections = collectionsRef.onSnapshot(async snapshot => {
            this.props.mapShopCollections(convertCollectionSnapshotToMap(snapshot));
        })
    }
    componentWillUnmount(){
        this.unSubScribeFromLoadingCollections();
    }

    render(){
        const {match} = this.props;
        return(
            <div className = "shop-page">
                <Route  exact path = { `${match.url}` } component = {CollectionOverview} />
                <Route exact path = { `${match.url}/:categoryId` } component = {CollectionPage} /> 
            </div>  
        )
    }
}
    

    
const mapDispatchToProps = (dispatch) => ({
    mapShopCollections : collectionsObj => dispatch(mapShopCollections(collectionsObj)) 
})

 
export default connect(null, mapDispatchToProps)(ShopPage);