const shopping=[
    {name:"watch",price:100,color:"black",quantity:2},
    {name:"pant",price:50,color:"blue",quantity:1},
    {name:"beg",price:200,color:"green",quantity:1},
    {name:"shoe",price:300,color:"brown",quantity:1},
]

let totalShoppingAmount =  0; 
for(const item of shopping){
    const price = item.price;
    const quantity = item.quantity;
    totalShoppingAmount+=price * quantity
}
console.log(totalShoppingAmount)