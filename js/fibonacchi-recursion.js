const sum=(i)=>{
    if(i==0){
        return 0
    }
   else if(i==1){
        return 1
    }
    
return sum[i]=sum(i-1)+sum(i-2)
}
console.log(sum(6))

