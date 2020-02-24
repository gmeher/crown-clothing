import {createSelector} from 'reselect';


const selectShop = store => store.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)
export const selectShopCollection = urlParam => createSelector(
    [selectShopCollections],
    collections => collections[urlParam]
)