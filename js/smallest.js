const smallest=(numbers)=>{
    let smallNum = numbers[0]
for(let i=0;i<numbers.length;i++){
    const singleNum = numbers[i]
    if(singleNum<smallNum)
    smallNum=singleNum
}
return smallNum;
}


const numbers = [2,7,9,11,44,55,99,1];
const numbers2 = [-2,-3,-10];
const largestNum = smallest(numbers);
const largestNum2 = smallest(numbers2);
console.log(largestNum)
console.log(largestNum2)