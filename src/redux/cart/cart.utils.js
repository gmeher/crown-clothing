export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( cartItem => {
        return cartItem.id === cartItemToAdd.id
    } );

    if(existingCartItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id ? { ...cartItem,  quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1} ];
}

export const removeItemfromCart = (cartItems, cartItemToRemove) => {
    return cartItems.map ( (cartItem) =>{
            if ( cartItem.id === cartItemToRemove.id ) {
                return {
                    ...cartItem,
                    quantity : cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity
                }
            }else{
                return {
                    ...cartItem
                }
            }
        }
    )
}

