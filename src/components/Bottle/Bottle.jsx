import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCard}) => {
    const {image,brand,material,price}=bottle;
    console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={image} alt="" />
            <h2>{brand}</h2>
            <h3>{material}</h3>
            <h4>${price}</h4>
            <button onClick={()=> handleAddToCard(bottle)}>
                Buy Now
            </button>
        </div>
    );
};

export default Bottle;