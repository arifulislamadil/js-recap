const products =[
    {name:"mobile phone",price:1200},
    {name:"asus laptop",price:1200},
    {name:"smart mobile phone",price:1200},
    {name:"dell laptop",price:1200},
]

function searchProduct(products,text){
    let matched =[]
    for(const product of products){
        if( product.name.toLowerCase().indexOf(text.toLowerCase())!=-1){
            matched.push(product)
        }
    }
    return matched;
}
console.log(searchProduct(products,"Phone"))