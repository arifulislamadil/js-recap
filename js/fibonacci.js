const fibo=(number)=>{
    if(typeof number !=="number"){
       return "please input a valid number"
    }else if(number<2){
        return "please enter a positive and greater then 2"
    }
    let fiboseri=[0,1]
    for(let i=2; i<number;i++){
        fiboseri[i]=fiboseri[i-1]+fiboseri[i-2];
    }
    return fiboseri;

}

console.log(fibo("3"))