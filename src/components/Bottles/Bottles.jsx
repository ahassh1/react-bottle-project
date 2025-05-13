import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
 
  const [card, setCard] =useState([])

    const bottles  = use(bottlesPromise);

    const handleAddToCard =(bottle)=>{
      console.log('bottle is going to be fullfill',bottle)
    }
   
    return (
        <div >
              <h3>Bottles: {bottles.length}</h3>
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