function recursion(n){
    if(n==1){
        return 1;
    }
    return n * recursion(n-1);
}
console.log(recursion(5))
// 5*(5-1)=20;
// 4*(4-1)=12;
// 3*(3-1)=6;
// 2*(2-1)=2;


function interest(p,t,r){
    const result =  (p * t * r) / 100 ;
    return result; 
}

console.log(interest(1000,12,10))
