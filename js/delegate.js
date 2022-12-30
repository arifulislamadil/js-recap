// const items = document.getElementsByClassName("item");
// for(const item of items){
//     item.addEventListener("click",function(e){
//         document.getElementById("item-container").removeChild(item);

//         console.log(e.target.parentNode)
//     })
// }


document.getElementById("add-item-btn").addEventListener("click",function(){
    const li=document.createElement("li");
    li.classList.add("item");
    li.innerText="lorem ipsom";

    const container = document.getElementById("item-container");
    container.appendChild(li)
})

document.getElementById("item-container").addEventListener("click",function(Event){
    event.target.parentNode.removeChild(event.target)
})