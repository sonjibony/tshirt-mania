import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {
let message;
if(cart.length ===0){
    message= <p>Please buy at least one item!!! </p>;
}
else{
message = <p>Thanks for buying</p>
}
    return (
        <div className='cart'>
            <h1>CART</h1>
           <h2 className={cart.length ===2 ? `orange` : 'pink'}>Order Summary</h2>
           <h4 className={`bold ${cart.length ===2? 'green' : 'light-blue'}`}>Order Quantity: {cart.length}</h4>
           {
            cart.map(tshirt => <p
key={tshirt._id}
           >
            {tshirt.name}
            <button onClick={() => handleRemoveItem(tshirt)}>X</button>
             </p>
             )
           }
           {
            message
           }
           {cart.length ===3 ? <p>tin jon ke gift diba?</p>: <p>kino kino</p>}
           {/* and operator */}
           {cart.length === 2 && <h2>Double Items!</h2>}
           {/* or operator */}
           {cart.length === 4 || <p>charta item na</p>}
        </div>
    );
};

export default Cart;