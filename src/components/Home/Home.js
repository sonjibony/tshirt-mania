import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import { addToDb } from '../Utilities/Fakedb';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
const [cart,setCart]= useState([]);

//cart handle

    const handleAddToCart = tshirt => {
        addToDb(tshirt);
        const exists = cart.find(ts => ts._id === tshirt._id);
        // const newCart = [...cart, tshirt];
        // setCart(newCart);
        if(exists){
            alert('already added');
        }
        else{
        const newCart = [...cart, tshirt];
        setCart(newCart);
        } 
    } 

//remove product
const handleRemoveItem = tshirt =>{
    const remaining = cart.filter (ts => ts._id !== tshirt._id)
    setCart(remaining)
}

    return (
        <div className='home-container'>
            <div className="tshirt-container">
            {
           tshirts.map(tshirt => <TShirt
           key={tshirt._id}
           tshirt ={tshirt}
           handleAddToCart= {handleAddToCart}
           ></TShirt>)
}
            </div>
           <div className="cart-container">
            <Cart
            cart= {cart}
            handleRemoveItem ={handleRemoveItem}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;