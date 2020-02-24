import React from 'react';
import {selectShopCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collectionpage.styles.scss';

const CollectionPage = ({match,collection}) => {
    const {title,items} = collection;
    
    return(
    <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items">
            {
                items.map( item => <CollectionItem key = {item.id} item = {item} /> )
            }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollection(ownProps.match.params.categoryId)(state)
})
 
export default connect(mapStateToProps)(CollectionPage);