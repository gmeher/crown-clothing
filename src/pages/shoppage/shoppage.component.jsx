import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collectionpage/collectionpage.component';
import './shoppage.styles.scss';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {mapShopCollections} from '../../redux/shop/shop.action';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverViewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


class ShopPage extends React.Component {

    state = {
        isLoading: true
    }

    unSubScribeFromLoadingCollections = null;
    componentDidMount(){
        const collectionsRef = firestore.collection('collections');
        this.unSubScribeFromLoadingCollections = collectionsRef.onSnapshot(async snapshot => {
            this.props.mapShopCollections(convertCollectionSnapshotToMap(snapshot));
            this.setState({isLoading: false});
        })
    }
    componentWillUnmount(){
        this.unSubScribeFromLoadingCollections();
    }

    render(){
        const {match} = this.props;
        const {isLoading} = this.state;
        return(
            <div className = "shop-page">
                <Route  
                    exact 
                    path = { `${match.url}` } 
                    render = { (props)=> (
                        <CollectionOverViewWithSpinner isLoading = {isLoading} {...props} />
                    )}
                />
               
                <Route  
                    exact 
                    path = { `${match.url}/:categoryId` }
                    render = { (props)=> (
                        <CollectionPageWithSpinner isLoading = {isLoading} {...props} />
                    )}
                />


            </div>  
        )
    }
}
    

    
const mapDispatchToProps = (dispatch) => ({
    mapShopCollections : collectionsObj => dispatch(mapShopCollections(collectionsObj)) 
})

 
export default connect(null, mapDispatchToProps)(ShopPage);