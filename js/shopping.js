document.getElementById("inc").addEventListener("click",function(){
    const amount = document.getElementById("amu");
    let amu = amount.innerText;
    let amuParse = parseInt(amu);
    amuParse+=1;
    amount.innerText=amuParse
})
document.getElementById("dec").addEventListener("click",function(){
    const amount = document.getElementById("amu");
    let amu = amount.innerText;
    let amuParse = parseInt(amu);
    amuParse-=1;
    amount.innerText=amuParse
})