/***
 * to get some thing from local storage , you will get it as a string
 * convert this to javascript object/array
 */

const getCardFromLocalStorage=()=>{
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart= JSON.parse(storedCartString)
        return storedCart;
    }
    return [];
}
  
const saveCartToLocalStorage = cart=> {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}
 
 const addItemToCartLocalStorage = id =>{
    const cart = getCardFromLocalStorage();
    // cart.push(id);

    const newCart = [...cart,id]
    // save new cart to the local storage  
    saveCartToLocalStorage(newCart)
 }

  const removeFromLocalStorage = id => {
    const storedCart = getCardFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !==id);
    saveCartToLocalStorage(remainingCart) 
  }

 export{getCardFromLocalStorage as getStoreCart ,
        addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart
 }