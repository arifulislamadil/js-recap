const products =[
    {name:"asus laptop",price:5000},
    {name:"mobile phone",price:200},
    {name:"smart mobile phone",price:800},
    {name:"dell laptop",price:2000},
]

function searchProduct(products){
 
    for(const product of products){
        if(product.price<700){
            continue;
        }
        console.log(product)
    }
  
 
}
(searchProduct(products))