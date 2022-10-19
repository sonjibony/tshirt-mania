import React from 'react';
import './TShirt.css';
const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture,name,price}= tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt=""></img>
<h2>Name: {name}</h2>
<div className="item-info">
<h3>Price: {price}$</h3>
<button className='btn-buy' onClick={() => handleAddToCart(tshirt)}>Add To Cart</button>
</div>
        </div>
    );
};

export default TShirt;