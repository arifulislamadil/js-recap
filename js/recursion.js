const sum=(i)=>{
    if(i==1){
        return 1
    }
return sum(i-1)+i ; 
}
console.log(sum(5))

