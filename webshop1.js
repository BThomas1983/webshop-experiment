let html='';
products.forEach((value, index) =>{
        let arrayElement=products[index];
        html+=`
        <div>
        <div class="img-div">${arrayElement.img}</div>
        <div>${arrayElement.id}</div>
        <div class="name-div">${arrayElement.name}</div>
        <button class="js-product-div" data-prod="${arrayElement.id}">Add to Cart</button>
        </div>
        `;
    });
    document.querySelector('.js-product-div').innerHTML=html;
    document.querySelectorAll('button').forEach((button)=>{
        button.addEventListener('click',()=>{
            const productId=button.dataset.prod;
        
            let matchingItem;
            
            cart.forEach((item)=>{
                if (productId===item.productId){
                    matchingItem=item;
                }
            });

            if (matchingItem){
                matchingItem.quantity+=1;
            }else{
                cart.push(
                    {productId:productId,
                    quantity:1
                    });
            }
            
                console.log(cart); 
                document.querySelector('.js-header').innerHTML=matchingItem.quantity;
        });    
    });