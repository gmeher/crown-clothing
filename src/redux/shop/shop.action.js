import ShopActionTypes from './shop.types';
export const mapShopCollections = (collectionsObj) => ({
    type: ShopActionTypes.MAP_SHOP_COLLECTIONS,
    payload: collectionsObj
})
