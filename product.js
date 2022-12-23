const data = [
    {
        "name": "Happy Pant",
        "price": 1234,
        "description":"",
        "img":"/Img/shirt/shirt1.png"

    },
    {
        "name": "Pantty suit",
        "price": 890,
        "description":"",
        "img":"/Img/shirt/shirt2.png"

    },
    {
        "name": "Long Pant",
        "price": 1282,
        "description":"",
        "img":"/Img/shirt/shirt3.png"

    },
    {
        "name": "Pant Pant",
        "price": 1150,
        "description":"",
        "img":"/Img/shirt/shirt4.png"

    },
    ];
    export var cart = [];
    document.querySelector("#row")
    const cartBtn = document.getElementById("cart");
    
    const container = document.createElement('div');
    // container.style="width: 100%; display: grid;column-gap: 10px;row-gap:10px; grid-template-columns: auto auto auto;";
    container.className="containProduct";
    
    data.forEach((item, index) => {
    const column = document.querySelector("#column")
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.img;
    
    card.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = item.name;
    card.appendChild(name);

    const price = document.createElement('p');
    price.textContent = "$"+item.price ;
    card.appendChild(price);



    const btn2 = document.createElement('button');
    btn2.className="addProduct";
    btn2.textContent = "Add";
    btn2.value = index;
    btn2.addEventListener("click",addToCart)
        
   
 
    card.appendChild(btn2)
    container.appendChild(card);
    });
    const box = document.querySelector("#cartAdd");
    const cartOpenBtn = document.getElementById("cart");
    cartOpenBtn.addEventListener("click",openCart);
    let isOpen = false;


// createDisplayProduct();
function openCart(){
   isOpen = !isOpen;

   box.style.display= isOpen?"block":"none";
   
  
   
    
   
    console.log(cart)

}
    function addToCart(event){
        box.style.display= isOpen?"block":"none";
  
 
        const item = data[event.target.value]
       console.log(isOpen);
        cart.push(data[event.target.value])
        alert("Add product to cart")
        // console.log(event.target.value)
        cartBtn.textContent = "Cart"+"("+ cart.length+")";
        cartBtn.value = cart;
        const cardAddProduct = document.createElement('div');
        cardAddProduct.classList.add('cardAddProduct');
    
        const img = document.createElement('img');
        img.src = item.img;
        // card.removeChild
        cardAddProduct.appendChild(img);
    
        const name = document.createElement('h2');
        name.textContent = item.name;
        cardAddProduct.appendChild(name);
    
        const price = document.createElement('p');
        price.textContent = "$"+item.price;
        cardAddProduct.appendChild(price);

        
    
        box.appendChild(cardAddProduct);
    
    }

    
    
    
   

    
    document.body.appendChild(container);
// export 
// export { cart };