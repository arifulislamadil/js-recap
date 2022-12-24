const mobiles=[
    {name: "samsung",price: 400,color: "black"},
    {name: "Nokia",price: 100,color: "red"},
    {name: "htc",price: 200,color: "white"},
    {name: "oppo",price: 10,color: "white"},
    {name: "iphone",price: 500,color: "white"},
    {name: "walton",price: 600,color: "blue"},
]

const mobilePrice =  500 ; 
for(const mobile of mobiles){
    if(mobile.price<mobilePrice){
        console.log(mobile.name)
    }
}