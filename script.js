const addProduct = ()=>{
    const productField = document.getElementById('product-name');
    const product  = productField.value;
    

    const quantityField = document.getElementById('product-quantity');
    const quantity = quantityField.value;
    

    productField.value ='';
    quantityField.value = '';

    displayProduct(product,quantity)
    saveProductToLocalStorage(product,quantity)
    
    
}


const displayProduct = (product, quantity)=>{

    const ul = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText =`${product} : ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart = ()=>{
    let cart = {};
    const loadStorage = localStorage.getItem('cart');
    
    if(loadStorage){
        cart = JSON.parse(loadStorage);
    }
    return cart;
}


const saveProductToLocalStorage = (product, quantity)=>{

   const cart = getStoredShoppingCart();
   cart[product] = quantity;

   const cartStringified  = JSON.stringify(cart);

   localStorage.setItem('cart', cartStringified)

}

const displayProductFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product]

        displayProduct(product,quantity)
    
    }
}

displayProductFromLocalStorage();