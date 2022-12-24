const mobiles=[
    {name: "samsung",price: 400,color: "black"},
    {name: "Nokia",price: 1000,color: "red"},
    {name: "htc",price: 20000,color: "white"},
    {name: "iphone",price: 120000,color: "white"},
    {name: "walton",price: 4000,color: "blue"},
]

let mobilePrice =  mobiles[0]; 
for(const mobile of mobiles){
    if(mobile.price>mobilePrice.price){
        mobilePrice=mobile
    }
}
console.log(mobilePrice)