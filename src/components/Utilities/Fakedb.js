const addToDb = (tshirt) =>{
    // const quantity = localStorage.getItem(tshirt._id);
    let shoppingCart ={};

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }

    //add quantity
const quantity = shoppingCart[tshirt._id];
    if(quantity){
        const newQuantity = parseInt(quantity) +1;
        shoppingCart[tshirt._id] = newQuantity;
        // localStorage.setItem(tshirt._id,newQuantity)
    }
    else{
        shoppingCart[tshirt._id] = 1;

        // localStorage.setItem(tshirt._id, 1)
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

export {addToDb}