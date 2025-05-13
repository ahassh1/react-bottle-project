import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {
    const {image}=bottle;
    // console.log(bottle)
    return (
        <div className='card'>
            <img src={image} alt="" />
        </div>
    );
};

export default Bottle;