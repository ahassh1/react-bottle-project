import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoreCart } from '../../Utilites/localstorage';

const Bottles = ({bottlesPromise}) => {
 
  const [cart, setCart] =useState([])

    const bottles  = use(bottlesPromise);

  // useEffect
    useEffect( () =>{
       const storeCartIds = getStoreCart();
      //  console.log(storeCaetIds,bottles)

      const storedCart =[];

      for(const id of storeCartIds){
        // console.log(id);
         const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [bottles])

    const handleAddToCard =(bottle)=>{
      // console.log('bottle is going to be fullfill',bottle)
      const newCart= [...cart,bottle];
      setCart(newCart);
  

    // save the bottle id in the storage 
    addToStoredCart(bottle.id)
 }
   
      const handleRemoveFromCart = id =>{
        console.log('remove item from the cart',id)
      }

    return (
        <div >
              <h3>Bottles: {bottles.length}</h3>
              <p>Added to cart:{cart.length}</p>
             
              <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

           <div className='bottles-container'>
                  {
                bottles.map(bottle => <Bottle  key={bottle.id}
                  handleAddToCard={handleAddToCard}
                  bottle={bottle}></Bottle>)
              }
           </div>
        </div>
    );
};
                
export default Bottles;