import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shoppage.styles.scss';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Collections: SHOP_DATA
         }
    }
    render() { 
        const {Collections} = this.state;
        return ( 
            <div className = "shop-page">
                {
                    Collections.map( ({id, ...otherProps}) => {
                        return (<CollectionPreview id={id} { ...otherProps} />)
                    })
                }
            </div>
         );
    }
}
 
export default ShopPage;