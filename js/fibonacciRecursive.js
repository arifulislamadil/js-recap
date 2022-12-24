const fiboRecursive=(n)=>{
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
     return fiboRecursive(n-1)+fiboRecursive(n-2);
}

console.log(fiboRecursive(6)) 