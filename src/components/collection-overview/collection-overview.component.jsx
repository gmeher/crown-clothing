import React from 'react';
import {connect} from 'react-redux';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map( ({id, ...otherProps}) => {
                return (<CollectionPreview key={id} { ...otherProps} />)
            })
        }
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectShopCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionOverview);