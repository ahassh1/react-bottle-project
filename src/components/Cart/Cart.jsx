import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;